// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <nav className="navbar">
    //   <h2>Aviruth Tech</h2>
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/about">About Us</Link></li>
    //     <li><Link to="/contact">Contact</Link></li>
    //   </ul>
    // </nav>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid container">
          <div className="col-6">
            <a className="navbar-brand" href="/">Aviruth Tech</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-6">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#courses" tabindex="-1" aria-disabled="true">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#internships" tabindex="-1" aria-disabled="true">Internships</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#contact" tabindex="-1" aria-disabled="true">Contact Us</Link>
                </li> */}
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
                <li className="nav-item"><a className="nav-link" href="#internships">Internships</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    
  );
}

export default Navbar;
