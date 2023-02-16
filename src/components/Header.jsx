import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import './styles.css'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary bg-color1 w-100 sticky-top p-3">
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
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/#section'>
                Nosotros
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
                    Páginas Web Responsive
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tiendas Online
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
