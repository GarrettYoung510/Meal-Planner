import React from 'react';
import { Link } from 'react-router-dom';
import Container from './../Container/Container'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <Link className="navbar-brand" to="/">Meal Plan</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="#">Features</Link>
            <Link className="nav-item nav-link" to="#">Pricing</Link>
            <Link className="nav-item nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
          </div>
        </div>
      </Container>
    </nav>  
  )
};
  
export default Navbar;