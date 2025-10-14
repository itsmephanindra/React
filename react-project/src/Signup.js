function Signup(){

    return(

        <>
        <h4 className="text-success">Signup page</h4>

        <div className="container">
                <div className="row">
                        <div className="col-5">

                                <div className="mb-3" >
                                    <label >Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>

                                <div className="mb-3">
                                    <label >Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                    </div>

                                <div>
                                    <button className="btn btn-primary">Signup</button>
                                </div>

                                <div><p>Already have an account? <a href="/login">Login</a></p></div>

                        </div>
                    </div>
        </div>


        </>
    )

}

    

export default Signup;