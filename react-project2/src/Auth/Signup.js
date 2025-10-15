import { useState } from "react"
import validateEmail from "../Utils/Utils"

function Signup() {

     var [name,setName]=useState("")
     var [email,SetEmail]=useState("")
     var [mobile,setMobile]=useState("")
     var [password,setPassword]=useState("")
     var [nameerror,setNameError]=useState("");
     var [emailerror,setEmailError]=useState("");
     var [mobileerror,setMobileError]=useState("");
    var[pworderror,setPwordError]=useState("")
    
    function handleNameChange(event){
        setName(event.target.value)

    }
    function handleMailchange(event){
       SetEmail(event.target.value)
    }

    function handleMobileChange(event){
        setMobile(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
    function handleCreateAccount(e){

        var errors=0;

        if(name.length <3)
        {setNameError("name is less than 3 characters")
            errors++;
         }
        else{setNameError("")}

        if (!validateEmail(email))
        {setEmailError("Email is Invalid")
            errors++;
        }
        else{setEmailError("")}

        if(mobile.length<10)
        {setMobileError("Invalid Mobile Number")
            errors++;
        }
        else{setMobileError("")}
         
        if(password.length<=8)
        {setPwordError("Password must be at least 8 characters long")
            errors++;
        }
        else{setPwordError("")}

        if(errors==0)
            console.log("Calling APi");
        
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4>Create Account</h4>
                        
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Enter your Name" onChange={e=>handleNameChange(e)}/>
                                <div className="text-danger">{nameerror}</div>
                                </div>
                                
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter your Mail id" onChange={e=>handleMailchange(e)}/>
                                <div className="text-danger">{emailerror}</div>
                                </div>
                                

                              <div className="mb-3">
                                <label>Mobile</label>
                                <input type="text" className="form-control" placeholder="Enter your mobile" onChange={e=>handleMobileChange(e)}/>
                                <div className="text-danger">{mobileerror}</div>
                                </div>    
                                
                             
                             <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={e=>handlePasswordChange(e)}/>
                                <div className="text-danger">{pworderror}</div>
                                </div>
                                

                             <div className="mb-3">
                                <button className="btn btn-warning" onClick={e=>handleCreateAccount(e)}>Create Account</button>
                                </div>

                                <a href="/">Home Page</a>
                               {name} <br/>
                               {email} <br/>
                                {mobile} <br/> 
                                {password} <br/>

                        </div>  
                    </div>
                

                </div>
        </>
    )
}

export default Signup;