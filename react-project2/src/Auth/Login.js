import { useState } from "react";
import validateEmail from "../Utils/Utils";
import axios from "axios";

function Login(){
 
var [email,setEmail]=useState("");
var [password,setPassword]=useState("");
var [emailError,setEmailError]=useState("");
var [pwordError,setPwordError]=useState("");
var [apiResponse,setapiResponse]=useState("");
var [token,setToken]=useState("");

function handleEmail(event){
 setEmail(event.target.value);
}
function handlePassword(event){
 setPassword(event.target.value);
}

async function validateLogin(){
    var errors=0;
    if (!validateEmail(email))
    {setEmailError("Email is invalid")
        errors++;
    }

    else (setEmailError(""))

    if(password.length<5)
    {setPwordError("Password must be more than 5 characters")
        errors++;
    }
    else {setPwordError("")}

    if(errors===0)
        {console.log("calling API....")
        var apiData={
            email:email,
            password:password
        }
        try {
            var apiResponse=await axios.post("https://api.softwareschool.co/auth/login",apiData)
            setapiResponse(apiResponse.data.result);

            if(apiResponse.data.result==="SUCCESS"){
                setToken(apiResponse.data.data.token);
                localStorage.setItem("userId", apiResponse.data.data.userId);
                window.location="/";
            }
            
            
        } catch (error) {
            setapiResponse("Login failed with unknown error" || error.message);

        }


}
}

return(
<>
<div className="container">
    <div className="row">
        <div className="col-4">
            <h3 className="mb-3">Login</h3>
            <div className="mb-3">
                <label>Email ID</label>
                <input type="text" className="form-control" placeholder="Enter your mail id" onChange={e=>handleEmail(e)}/>
                <div className="text-danger">{emailError}</div>
                </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control"  onChange={e=>handlePassword(e)}/>
                <div className="text-danger">{pwordError}</div>
                </div>

            </div>

            <div>
                <button className="btn btn-warning" onClick={e=>validateLogin(e)}>Login</button>
                {localStorage.getItem("userId")}
                </div>
                <br/>
                <div className="alert alert-warning col-4">
                    {apiResponse}
                    {token}
                </div>

            <a href="/">Home Page</a>

        </div>

    </div>
    


</>
)
}

export default Login;