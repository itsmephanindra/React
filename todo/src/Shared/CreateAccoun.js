import { useState } from "react";
import Logo from "../Images/Logo.png";
import NavBar from "./NavBar";
import { ERROR_MESSAGES } from "../constants/erros";
import { signUpApi } from "../services/authService";
import { checkUserLoginStatus } from "../utils/util";

function CreateAccount() {

  let isUserLoggedIn = checkUserLoginStatus();
  if (isUserLoggedIn) {
    window.location = "/";
  }

  const [singupdata, setSignUpData] = useState({
    name: "",
    pwd: "",
    email: "",
  });

  const [signUpErros, setSignUpErros] = useState({
    name: false,
    pwd: false,
    email: false,
  });

  const updateName = (e) => {
    setSignUpData({ ...singupdata, name: e });
  };
  const updatePwd = (e) => {
    setSignUpData({ ...singupdata, pwd: e });
  };
  const updateEmail = (e) => {
    setSignUpData({ ...singupdata, email: e });
  };

  const handleSignup = async () => {

    let tempErros = { ...signUpErros };
    let hasErrors=false;
    if (singupdata.name.length < 3) {
      hasErrors=true;
      tempErros = { ...tempErros, name: true };
    } else {
      tempErros = { ...tempErros, name: false };
    }

    if (singupdata.pwd.length < 3) {
      hasErrors=true;
      tempErros = { ...tempErros, pwd: true };
    } else {
      tempErros = { ...tempErros, pwd: false };
    }

    if (singupdata.email.length < 3) {
      hasErrors=true;
      tempErros = { ...tempErros, email: true };
    } else {
      tempErros = { ...tempErros, email: false };
    }
    setSignUpErros(tempErros);

    if (!hasErrors){
      let apiResponse=await signUpApi({...singupdata});
      console.log(apiResponse);

      if (apiResponse.data.result==="success"){
        localStorage.setItem("userData", JSON.stringify(apiResponse.data.data));
        localStorage.setItem("trackingId", 1);
        window.location="/";

    }
  }}

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
              <h4> Create Account</h4>
              <div className="mt-2">
                <strong>Full Name</strong>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Name"
                  onChange={(e) => updateName(e.target.value)}
                />
                {signUpErros.name && (
                  <span className="text-danger">
                    {ERROR_MESSAGES["name.too.short"]}
                  </span>
                )}
              </div>
              <div className="mt-1">
                <strong>Password</strong>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  onChange={(e) => updatePwd(e.target.value)}
                />
                 {signUpErros.pwd && (
                  <span className="text-danger">
                    {ERROR_MESSAGES["pwd.too.short"]}
                  </span>
                )}
              </div>

              <div className="mt-2">
                <strong className="mt-2">Mail</strong>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter Mail id "
                  onChange={(e) => updateEmail(e.target.value)}
                />
                 {signUpErros.email && (
                  <span className="text-danger">
                    {ERROR_MESSAGES["email.too.short"]}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <p>
                  Hellolo this is paragranth dont talk anything about it this is
                  very secret
                </p>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-warning"
                  onClick={(e) => handleSignup()}
                >
                  Create Account
                </button>
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
}

export default CreateAccount;
