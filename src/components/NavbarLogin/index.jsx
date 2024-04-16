import React from "react";
import profilephoto from "../../assets/img/Usericon.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pp from "../../assets/img/Usericon1.png";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarLogin = () => {
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
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
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
      <Navbar
        expand="lg"
        className="bg-body-tertiary mt-3 "
        style={{ height:"10vh" }}
      >
        <Container fluid   style={{ height:"100%"}}>
          <Navbar.Toggle aria-controls="navbarScroll" className=" ml-auto" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0  "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="ml-5 "
                style={{ color: "#2E266F" }}
              >
                <Link to={"/LandingPage"}>Home</Link>
              </Nav.Link>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/addRecipe"}>Add Recipe</Link>
              </Nav.Link>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/profile"}>Profile</Link>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto " style={{ alignItems: "center" }}>
            <Nav.Link className="" style={{ color: "#2E266F" }}>
              <Link to={"/auth/Login"}>
                <img
                  src={pp}
                  alt="pp"
                  style={{
                    width: "20px", // Atur lebar gambar sesuai kebutuhan
                    height: "20px", // Atur tinggi gambar sesuai kebutuhan
                    marginRight: "10px", // Jarak antara gambar dan teks
                    transform: "scale(1.5)", // Atur tingkat pembesaran
                  }}
                />
                Login
              </Link>
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLogin;
