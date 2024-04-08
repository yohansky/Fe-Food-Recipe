import React, { useEffect, useState } from "react";
import NavbarProfile from "../../components/NavbarProfile";
import Discover from "../../components/Discover";
import PopularForYou from "../../components/PopularForYou";
import NewRecipe from "../../components/NewRecipe";
import PopularRecipe from "../../components/PopularRecipe";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import profilephoto from "../../assets/img/profilepic.png";
import pp from "../../assets/img/Usericon1.png";
import axios from "axios";
import recipe12 from "../../assets/img/recipe12.png";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import recipe1 from "../../assets/img/recipe1.png";
import recipe3 from "../../assets/img/recipe3.png";

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(``)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   const [token, setToken] = useState("");
  //   useEffect(() => {
  //     setToken(localStorage.getItem("token"));
  //   }, [token]);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mt-4">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
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
          <Link to={"/auth/Login"}>
            <p className="mr-5">
              <img src={pp} alt="pp" /> Login
            </p>
          </Link>
        </Container>
      </Navbar>
      {/* {JSON.stringify(recipes)} */}
      <div style={{ marginLeft: "90px", marginRight: "90px" }}>
        {/* Container */}
        <div className="row mt-5">
          <div className="col-6" style={{ paddingTop: "150px", paddingLeft: "30px" }}>
            <h1 style={{ color: "#2E266F" }}>
              Discover Recipe <br /> & Delicious Food
            </h1>
            <InputGroup style={{ height: "48px" }}>
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <Form.Control style={{ height: "48px" }} type="search" aria-label="Example text with button addon" aria-describedby="basic-addon1" />
            </InputGroup>
          </div>
          <div className="col-6">
            <div className="card rounded">
              <img src={recipe12} alt="recipe" style={{ height: "500px" }} />
            </div>
          </div>
        </div>
        <div className="popular">
          {/* Popular for you */}
          <div className="row" style={{ marginTop: "90px" }}>
            <div className="col-1">
              <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "120px" }}></div>
            </div>
            <div className="col">
              <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular For You !</h3>
            </div>
          </div>
          {/* Popular for you */}
          <div className="row mt-5">
            <div className="col-6">
              <img src={recipe1} alt="1" style={{ height: "550px", paddingLeft: "40px" }} />
            </div>
            <div className="col-6" style={{ marginTop: "150px", paddingLeft: "30px" }}>
              <h1>
                Healthy Bone Broth <br /> Ramen (Quick& Easy)
              </h1>
              <div style={{ border: "1px solid black", width: "50px" }}></div>
              <div className="mt-2">
                <h3>
                  Quick + Easy Chicken Bone Broth Ramen- <br /> Healthy chicken ramen in a hurry? That's right!
                </h3>
                <div className="text-center">
                  <Button variant="warning">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newrecipe">
          {/* New Recipe */}
          <div className="row" style={{ marginTop: "90px" }}>
            <div className="col-1">
              <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
            </div>
            <div className="col">
              <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>New Recipe!</h3>
            </div>
          </div>
          {/* New Recipe */}
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-6">
              <img src={recipe3} alt="1" style={{ height: "550px", paddingLeft: "30px" }} />
            </div>
            <div className="col-6" style={{ marginTop: "150px", paddingLeft: "30px" }}>
              <h1>
                Healthy Bone Broth <br /> Ramen (Quick& Easy)
              </h1>
              <div style={{ border: "1px solid black", width: "50px" }}></div>
              <div className="mt-2">
                <h3>
                  Quick + Easy Chicken Bone Broth Ramen- <br /> Healthy chicken ramen in a hurry? That's right!
                </h3>
                <div className="text-center">
                  <Button variant="warning">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Popular">
          {/* Popular for you */}
          <div className="row" style={{ marginTop: "90px" }}>
            <div className="col-1">
              <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
            </div>
            <div className="col">
              <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular For You !</h3>
            </div>
          </div>
          {/* Popular for you */}
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="mt-5" style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "1480px", height: "685px", position: "absolute" }}>
          <div style={{ marginTop: "247px", textAlign: "center" }}>
            <h3 style={{ fontWeight: "400", fontSize: "72px", textAlign: "center" }}>Eat,Cook,Repeat</h3>
            <h4 className="mt-4" style={{ fontSize: "24px", color: "#707070" }}>
              Share Your Best Recipe By Uploading Here !
            </h4>
          </div>
          <div style={{ marginTop: "217px", marginLeft: "500px" }}>
            <div className="row">
              <div className="col-2">Product</div>
              <div className="col-2">Company</div>
              <div className="col-2">Learn More</div>
              <div className="col-2">Get in Touch</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
