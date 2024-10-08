import { Link, useLocation } from 'react-router-dom';

import { Logo } from '@/assets/images';

function Header() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.endsWith(path) ? 'active' : '';

  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap justify-content-center">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={Logo} alt="logo" height="32" />
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/')}`}
              aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className={`nav-link ${isActive('/products')}`}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
