// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/navbar.css'

// function Navbar() {
//   return (
//     <div>
//       	<nav className="navbar navbar-expand-lg navbar-light bg-dark">
// 			<div className="container-fluid container">
// 				<div className="row">
// 					<div className="col-md-6 col-12">
// 						<div className="row">
// 							<div className="col-6">
// 								<a className="navbar-brand" href="/">Aviruth Tech</a>
// 							</div>
// 							<div className="col-6">
// 								<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// 									<span className="navbar-toggler-icon"></span>
// 								</button>
// 							</div>
							
// 						</div>
// 					</div>
// 					<div className="col-md-6 col-12">
// 						<div className="collapse navbar-collapse" id="navbarNav">
// 							<ul className="navbar-nav">
// 								<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
// 								<li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
// 								<li className="nav-item"><a className="nav-link" href="#internships">Internships</a></li>
// 								<li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
// 								<li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
//       	</nav>
//     </div>
    
    
//   );
// }

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="/">Aviruth Tech</a>

        {/* Toggler (hamburger on mobile) */}
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

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#internships">Internships</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

