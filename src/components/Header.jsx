import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import './styles.css'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary bg-color1 w-100 sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt='logo' />
        </Link>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link ${(isActive)=>isActive ? 'active' : ''}`} aria-current="page" href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/#section'>
                Link
              </NavLink>
            </li>
            <li className="nav-item dropdown bg-color1">
              <NavLink
                className="nav-link dropdown-toggle"
                
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </NavLink>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
