import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
    
      <nav className="navbar navbar-expand-lg navbar bg-primary ">
        <div className="container-fluid">
          <Link className="navbar-brand $black d-flex align-items-center" to="/">
          <img
            src="https://cdn-icons-png.freepik.com/512/81/81755.png" // Path to your main logo image
            alt="Logo"
            style={{ width: '30px', marginRight: '10px' }}
          />
           <b> Job Finder </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark " to="/"> 
                <i className="fas fa-briefcase me-1"></i> <b> Jobs </b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark " to="/companies">
                <i className="bi bi-person-workspace me-1"></i> <b> Companies</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                <i className="fas fa-info-circle me-1" ></i> <b> About </b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark " to="/contact">
                <i className="fas fa-phone me-1"></i> <b> Contact </b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark " to="/register">
                <i className="fas fa-user-plus me-1"></i>  <b> Register </b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/login">
                <i className="fas fa-sign-in-alt me-1"></i> <b> Login </b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;