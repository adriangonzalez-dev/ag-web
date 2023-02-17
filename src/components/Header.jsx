import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.webp'
import './styles.css'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary w-100 sticky-top p-3">
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
              <a className={`nav-link ${(isActive)=>isActive ? 'active' : ''}`} aria-current="page" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#section'>
                ¿Porqué tener una página web?
              </a>
            </li>
            <li className="nav-item dropdown bg-color1">
              <a
                className="nav-link dropdown-toggle"
                href="#services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#plan">
                    Planes
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#process">
                    Proceso de desarrollo
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
