import { useState } from "react";
import NavBar from "./NavBar";
import Logo from "../Images/Logo.png";
import { RESET_ERRORS } from "../constants/erros";
import { resetPasswordApi } from "../services/authService";

export const ResetPassword = () => {

    const [email,setEmail]=useState("")
    const [emailError,setEmailError]=useState({emailErr:false,apiError:false,apiPasswordReset:false})

   const handleReset=async ()=> {
    let hasError=false;

    if (email.length<3)
    {
            setEmailError({...emailError,emailErr:true,apiPasswordReset:false})
            hasError=true;
    }
    else{
            setEmailError({...emailError,emailErr:false,apiPasswordReset:false})
            hasError=false;
    
    }

    if (!hasError)
    {
        try{

            let apiResponse=await resetPasswordApi({email})
            if(apiResponse.data.result==="success")
            {
                     setEmailError({...emailError,apiPasswordReset:true})
            }

        }

        catch{

        }
        
    }


   }

  return (
  <div className="container-fluid">
      <div className="row">
        <NavBar />
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <div className="text-center">
            <img src={Logo} className="logo"  alt="logo"/>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <h4> Reset Here</h4>
              <div className="mt-2">
                <strong>Email</strong>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Mail id"
                  onChange={e=>setEmail(e.target.value)}
                    
                  
                />
                {emailError.emailErr && (
                  <span className="text-danger">{RESET_ERRORS["email.too.short"]}</span>
                )}
              </div>
              <div className="d-grid mt-2">
                <button className="btn btn-warning" onClick={e=>handleReset()}>ResetPassword</button>
              </div>

              <div className="text-center mt-2">

                {
                        emailError.apiPasswordReset && 
                        <span className="text-success">{RESET_ERRORS["email.reset.success"]}</span>

                }
              </div>
         </div>
        </div>
      </div>
    </div>
  </div>
         
  );
};