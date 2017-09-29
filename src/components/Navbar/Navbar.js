import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  render(){
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm fixed-top justify-content-between">
        <div className="container-fluid">
        <a href="/" className="navbar-brand">Refactored Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse justify-content-stretch" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;