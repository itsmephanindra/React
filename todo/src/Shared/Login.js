import NavBar from "./NavBar";
import Logo from "../Images/Logo.png";
import { useState } from "react";
import { ERROR_MESSAGES } from "../constants/erros";
import { signInApi, signUpApi } from "../services/authService";

const Login = () => {
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  let [loginErrors, setLoginErrors] = useState({
    nameError: false,
    pwdError: false,
    apiError:false
  });

  const handleLogin = async () => {
    let tempErros = { ...loginErrors };
    let hadErrors=false;

    if (loginData.email.length < 3) {
      tempErros = { ...tempErros, nameError: true };
      hadErrors=true;
    } else {
      tempErros = { ...tempErros, nameError: false };
      hadErrors=false;
    }

    if (loginData.password.length < 3) {
      hadErrors=true;
      tempErros = { ...tempErros, pwdError: true };
    } else {
      tempErros = { ...tempErros, pwdError: false };
      hadErrors=false;
    }

    setLoginErrors({ ...tempErros });


    if (!hadErrors){

      try{
        let apiResponse=await signInApi({...loginData});

        if (apiResponse.data.result==="success")
        {
          localStorage.setItem("userData",JSON.stringify(apiResponse.data.data))
          window.location="/"
        }


    }
    catch{
      setLoginErrors({...loginErrors,apiError:true})
    }

  }


  };

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <NavBar />
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <div className="text-center">
            <img src={Logo} className="logo" />
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <h4> Login Here</h4>
              <div className="mt-2">
                <strong>Full Name</strong>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                {loginErrors.nameError && (
                  <span className="text-danger">{ERROR_MESSAGES["name.too.short"]}</span>
                )}
              </div>
              <div className="mt-1">
                <strong>Password</strong>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>

              {loginErrors.pwdError && (
                <span className="text-danger">{ERROR_MESSAGES["pwd.too.short"]}</span>
              )}

              <div className="mt-4">
                <p>
                  Hellolo this is paragranth dont talk anything about it this is
                  very secret
                </p>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-warning"
                  onClick={(e) => handleLogin()}
                >
                  Login
                </button>
              </div>
              <div>
                {
                    loginErrors.apiError && (
                        <span className="text-danger">Invalid Credentials</span>
                    )

                }

                <div>
                  Forgot Password? <a href="/reset-password">Click Here</a>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-center mt-3">&copy;This is footer</div>
      </div>
    </div>
  );
};

export default Login;
