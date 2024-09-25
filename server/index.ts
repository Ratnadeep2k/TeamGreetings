import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/signup', async (req: Request, res: Response) => {
  const { name, email, password, dob, joinDate } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: password,
        dateOfBirth: new Date(dob),
        joiningDate: new Date(joinDate)
      }
    });

    // Set a cookie
    res.cookie('userId', newUser.id, { httpOnly: true, maxAge: 3600000 });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
