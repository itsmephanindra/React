function Login(){

    return(
       <>
       <h3 className="text-success"> This is Login Page</h3>

       <div className="container">
            <div className="row">
                <div className="col-6">
                        <div className="mb-3">
                            <label>Email</label>
                            <input type='text'  className="form-control" placeholder="Email id"/>
                            </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type='password'  className="form-control" />
                            </div>

                        <div>
                            <button className="btn btn-primary">Login</button>
                            </div>
                    </div>

                </div>



        </div>



       </>
    )
}

export default Login;