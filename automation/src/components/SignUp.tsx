import { useState } from "react"
import axios from 'axios'

function SignUp() {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
  return (
    <>
    <input onChange={(e)=>{
        setUsername(e.target.value);
    }} type="text" placeholder="email"/>
    <input onChange={(e)=>{
        setPassword(e.target.value);
    }} type="text" placeholder="password"/>
    <button onClick={async()=>{
        const response = await axios.post("http://localhost:3000/signin",{
            username,
            password
        },{
            withCredentials:true,
        });
        console.log(response);
        alert("You are logged in")
    }}>Sign Up</button>
    
    </>
  )
}

export default SignUp