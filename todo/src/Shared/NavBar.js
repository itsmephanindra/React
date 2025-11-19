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

            <li className="nav-item me-2">
             <Login/>
            </li>
            <li className="nav-item me-2">
              <CreateAccount/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
