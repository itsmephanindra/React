function Talktous({message}){
    return(
        <>
        <div className="card shadow border-0 p-2 mt-3">
        <h1 className="mt-3">Talk to us Page</h1>
            <div>{message}</div>
            
             <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your name"/>
                </div>

            <div className="mb-3">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter your Mail id"/>
                </div>

            <div className="mb-3">
                <label>Mobile</label>
                <input type="text" className="form-control" placeholder="Enter your Mobile"/>
                </div>

            <div>
              <button className="btn btn-warning">Submit</button>
                </div>
        </div>
        
        </>
    )
}
export default Talktous;