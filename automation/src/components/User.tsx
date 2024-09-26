import { useEffect, useState } from "react";
import axios from "axios";

export const User = () => {
    const [userdata,SetUserData] = useState<any>();
    useEffect(()=>{
         axios.get("http://localhost:3000/user",{
            withCredentials :true,
        })
        .then((res)=>{
            SetUserData(res.data);
        })
    },[]);
    return (
        <div>
            Your id is {userdata?.userId}
            <br></br>
            
            <button onClick={()=>{
                axios.post("http://localhost:3000/logout",{},{
                    withCredentials:true,
                })
                .then((res)=>{
                    console.log(res);
                    alert("Logged out");
                })
            }}>
                Log out
            </button>
        </div>
    )
}