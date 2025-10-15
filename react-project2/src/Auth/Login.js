import { useState } from "react";
import validateEmail from "../Utils/Utils";

function Login(){
 
var [email,setEmail]=useState("");
var [password,setPassword]=useState("");
var [emailError,setEmailError]=useState("");
var [pwordError,setPwordError]=useState("");

function handleEmail(event){
 setEmail(event.target.value);
}
function handlePassword(event){
 setPassword(event.target.value);
}

function validateLogin(){
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

    if(errors==0)
        console.log("calling API....")

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
                </div>

            <a href="/">Home Page</a>

        </div>

    </div>
    


</>
)
}

export default Login;