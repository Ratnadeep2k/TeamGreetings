import express,{Request,Response}from 'express';
import { PrismaClient } from '@prisma/client';
const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello it is working")
})

app.listen(3000,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})