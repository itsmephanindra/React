import Form from "./Form";

function Home(){
    var uid=localStorage.getItem("userId");

    function logout(e){
        localStorage.clear();
        window.location.reload();

    }

return (
<>
<div className="container">
    <h3 className="mb-3">Home Page</h3>
    <div className="mb-2">
        <a href="/signup">Create Account</a> <br/>
        </div>
        {(uid==null) &&  <div>Please login to access your account<br/><a href="/login">Login</a></div>}
        {(uid!=null) &&  <div><button className="btn btn-warning" onClick={e=>logout(e)}>Logout</button><br/></div>}
                    
        <Form/>
</div>
</>

)

}

export default Home;