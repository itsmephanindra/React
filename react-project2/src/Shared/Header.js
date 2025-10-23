import { useState } from "react";

function Header(){

    var [navClass,setnavClass]=useState("collapse navbar-collapse");
    var isShowing=false;

    function handleNavbarToggle(){
        if(isShowing===false){
            isShowing=true;
            setnavClass("navbar-collapse");
        }else{
            setnavClass("collapse navbar-collapse");
        }
    }

return (
    <>
        <nav className="navbar shadow mt-3 navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="/brand.jpg" height="40" alt="Brand Logo" />
                </a>
                
            <button className="navbar-toggler" type="button" onClick={e=>handleNavbarToggle()}>
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>


            <div className="{navClass}">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/courses">Courses</a></li>
                    <li className="nav-item"><a className="nav-link" href="/signup">SignUp</a></li>
                    <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>   




                </ul>
            </div>
        </nav>
    </>
)
}

export default Header;