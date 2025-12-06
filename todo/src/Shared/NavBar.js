import { checkUserLoginStatus } from "../utils/util";

function NavBar() {
  let isUserLoggedIn = checkUserLoginStatus();
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
        <h3 className="navbar-brand">My ToDo</h3>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <a href="/" className="nav-link">
                Home{" "}
              </a>
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
                    <a className="dropdown-item" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/signup">
                      New Users?{" "}
                      <span className="text-primary">Start Here</span>
                    </a>
                  </li>
                </ul>
              )}

              {isUserLoggedIn && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      onClick={(e) => logout()}
                    >
                      Logout
                    </a>
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
