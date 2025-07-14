import { Link, useLocation } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg fade-in">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FaRegCalendarCheck size={28} style={{ color: '#a5b4fc' }} />
          <span style={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1px' }}>Eventify</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center${expanded ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav gap-3 mx-auto">
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/about' ? ' active' : ''}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/services' ? ' active' : ''}`} to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/gallery' ? ' active' : ''}`} to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
            <Link to="/login" className="btn btn-outline-light px-3 py-1">Login</Link>
            <Link to="/signup" className="btn btn-light text-primary px-3 py-1">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
