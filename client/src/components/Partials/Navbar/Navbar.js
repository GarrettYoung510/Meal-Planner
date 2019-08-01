import React from "react";
// import { Link } from 'react-router-dom';
// import Container from './../Container/Container'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href={"/"}>
        Meal Plan
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href={"/"}>
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href={"/"}>
            Features
          </a>
          <a className="nav-item nav-link" href={"/"}>
            Pricing
          </a>
          <a
            className="nav-item nav-link disabled"
            tabindex="-1"
            aria-disabled="true"
            href={"/"}
          >
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
