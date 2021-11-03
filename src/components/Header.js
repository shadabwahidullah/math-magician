import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
    <div className="d-flex col-12 justify-content-between">
      <Link to="/" className="navbar-brand">
        Math Magicians
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-link active">
            Home
          </Link>
          <Link to="/calculator" className="nav-link">
            Calculator
          </Link>
          <Link to="/Quote" className="nav-link">
            Quote
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
