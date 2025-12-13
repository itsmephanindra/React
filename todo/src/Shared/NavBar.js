import { Link } from "react-router-dom";
import { checkUserLoginStatus } from "../utils/util";
import { useState } from "react";


function NavBar() {
  let isUserLoggedIn = checkUserLoginStatus();
  let [showDropDown,setShowDropDown]=useState(false);

  console.log(isUserLoggedIn);

  function logout() {
    let trackingId = localStorage.getItem("trackingId");
    localStorage.clear();
    window.location = "";
    localStorage.setItem("trackingId", trackingId);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand text-left">Amazon</h1>


                      <div className="input-group">
            
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action before</a></li>
                  <li><a className="dropdown-item" href="#">Another action before</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>

                <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
                <button className="btn btn-outline-secondary " type="button"  aria-expanded="false"><i className="bi bi-amazon"></i></button>
                {!showDropDown &&

                  <div className="search-drop-down shadow">
                 

                </div>

                }

              </div>


        <div>
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <div className="dropdown">
              
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>

              {!isUserLoggedIn && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/login" className="dropdown-item">Login</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      New Users?{" "}
                      <span className="text-primary">Start Here</span>
                    </Link>
                  </li>
                </ul>
              )}

              {isUserLoggedIn && (
                <ul className="dropdown-menu">
                  <li>
                    <Link  className="dropdown-item"   to="/" onClick={(e) => logout()} >     Logout             </Link>
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
