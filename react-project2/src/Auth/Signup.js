import { useState } from "react"

function Signup() {

     var [name,setName]=useState("Kumar")
     var [email,SetEmail]=useState("Kumar@gmail.com")
     var [mobile,setMobile]=useState("")
     var [password,setPassword]=useState("")
    
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
        console.log(name,email,mobile,password,e)
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
                                </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter your Mail id" onChange={e=>handleMailchange(e)}/>
                                </div>

                              <div className="mb-3">
                                <label>Mobile</label>
                                <input type="text" className="form-control" placeholder="Enter your mobile" onChange={e=>handleMobileChange(e)}/>
                                </div>    
                             
                             <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={e=>handlePasswordChange(e)}/>
                                </div>

                             <div className="mb-3">
                                <button className="btn btn-warning" onClick={e=>handleCreateAccount(e)}>Create Account</button>
                                </div>
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