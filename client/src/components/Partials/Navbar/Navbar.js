import React from "react";
import Container from "./../Container/Container";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const Navbar = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

// ****************OLD NAVBAR**********************
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <Container>
//         <a className="navbar-brand">
//           <Link to="/" className="text-warning">
//             Meal Plan
//           </Link>
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <a className="nav-item nav-link">
//               <Link to="/" className="text-light">
//                 Home{" "}
//               </Link>
//               <span className="sr-only">(current)</span>
//             </a>
//             <a className="nav-item nav-link">
//               <Link to="/profilepage" className="text-light">
//                 Profile
//               </Link>
//             </a>
//             <a className="nav-item nav-link">
//               <Link to="/signin" className="text-light">
//                 Sign In
//               </Link>
//             </a>
//             <a className="nav-item nav-link">
//               <Link to="/signup" className="text-light">
//                 Sign Up
//               </Link>
//             </a>
//           </div>
//         </div>
//       </Container>
//     </nav>
//   );
// };

export default Navbar;
