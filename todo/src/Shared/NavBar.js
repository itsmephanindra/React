import Login from "./Login";
import CreateAccount from "./CreateAccoun";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h3 classname="navbar-brand">My ToDo</h3>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item me-2"><a href="/" className="nav-link">Home </a></li>
            <li className="nav-item me-2"><a href="/" className="nav-link">Signup</a></li>

            <li className="nav-item me-2"><a href="/" className="nav-link">Login</a></li>

                      <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/login">Login</a></li>
                <li><a className="dropdown-item" href="/signup">New Users?  
                  <span className="text-primary">Start Here</span>
                  </a></li>
                
              </ul>
            </div>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
