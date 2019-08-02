import React from "react";
import Container from "./../Container/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <a className="navbar-brand">
          <Link to="/">Meal Plan</Link>
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
            <a className="nav-item nav-link">
              <Link to="/">Home </Link>
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link">
              <Link to="/">Features</Link>
            </a>
            <a
              className="nav-item nav-link disabled"
              tabindex="-1"
              aria-disabled="true"
              Link
              to={"/"}
            >
              Disabled
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
