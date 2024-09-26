import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import jwt,{JwtPayload } from "jsonwebtoken"
import path from 'path'

const JWT_SECRET = "test1234";
const app = express();
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

app.post('/signin',(req,res)=>{
    const email =req.body.email;
    const password =- req.body.password;
    //All db validation done here 
    //It is just a testing of Auth using cookies 
    const token = jwt.sign({
        id:1
    },JWT_SECRET);
    res.cookie('_set_the_secret_cookie',token); //will put the cookie in the set-cookie header 
    res.send("logged in!");
});

app.get("/user",(req,res)=>{
    const token = req.cookies._set_the_secret_cookie;
   const decoded =jwt.verify(token,JWT_SECRET) as JwtPayload;
    console.log(decoded);
    //get user email from database 
    res.send({
        userId :decoded.id
    });
})

app.post('/logout',(req,res)=>{
    res.clearCookie('_set_the_secret_cookie'); //set the cookie  empty string 
    res.send("logged out!");
})
app.listen(3000);