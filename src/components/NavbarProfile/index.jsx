import React from "react";
import profilephoto from "../../assets/img/profilepic.png";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pp from "../../assets/img/Usericon1.png";

const NavbarProfile = () => {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mt-4">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex gap-2 align-items-end" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/LandingPage"}>Home</Link>
              </Nav.Link>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/addRecipe"}>Add Recipe</Link>
              </Nav.Link>
              <Nav.Link className="ml-5" style={{ color: "#2E266F" }}>
                <Link to={"/profile"}>Profile</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarProfile;
