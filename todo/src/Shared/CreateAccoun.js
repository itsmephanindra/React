import Logo from "../Images/Logo.png";

function CreateAccount() {
  return (
    <div className="container">
      <div className="row justify-content-center">
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
                />
              </div>

              <div className="mt-1">
                <strong>Password</strong>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                />
              </div>

              <div className="mt-2">
                <strong className="mt-2">Mail</strong>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter Mail id "
                />
              </div>

              <div className="mt-4">
                <p>
                  Hellolo this is paragranth dont talk anything about it this is
                  very secret
                </p>
              </div>
              <div className="d-grid">
                <button className="btn btn-warning">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-center mt-3">
            &copy;This is footer
            </div>


      </div>

    </div>
  );
}

export default CreateAccount;
