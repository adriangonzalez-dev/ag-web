import { useEffect } from 'react';
import logo from '../assets/logo.png'
import './styles.css'

export const Header = () => {
  useEffect(() => {
    console.log('me renderice')
  }, [logo]);
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary w-100">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt='logo' />
        </a>
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className='nav-link'  aria-current="page" href="#home">
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
