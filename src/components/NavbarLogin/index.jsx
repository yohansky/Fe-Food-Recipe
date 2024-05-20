import React from "react";
import profilephoto from "../../assets/img/Usericon.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pp from "../../assets/img/Usericon1.png";

const NavbarLogin = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mt-4">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex gap-2 align-items-end" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/LandingPage"} style={{ borderRadius: "36px" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/addRecipe"}>Add Recipe</Link>
              </Nav.Link>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/profile"}>Profile</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link to={"/auth/Login"}>
            <p className="mr-5">
              <img src={pp} alt="pp" /> Login
            </p>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLogin;
