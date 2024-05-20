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
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://be-food-recipe-prod-production.up.railway.app/api/v1/recipe/data`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
    //ambil userid yang tadi sudah di set di login
  }, [token, userId]);
  return (
    <>
      <main id="landingpage">
        <div style={{ top: "0px", left: "0px", zIndex: "-2", position: "absolute" }}>
          {/* <div className="row border" style={{ height: "140px" }}>
            <div className="col-8 border"></div>
            <div className="col-4 border" style={{ backgroundColor: "#EFC81A" }}></div>
          </div> */}
        </div>
        {token && userId ? <NavbarProfile /> : <NavbarLogin />}
        {/* {JSON.stringify(recipes)} */}
        {/* <div style={{ marginLeft: "90px", marginRight: "90px" }}> */}
        {/* Container */}
        <div className="row mt-5 border">
          <div className="col-md-6" style={{ paddingTop: "150px", paddingLeft: "30px" }}>
            <h1 style={{ color: "#2E266F" }}>
              Discover Recipe <br /> & Delicious Food
            </h1>
            <InputGroup style={{ height: "48px" }}>
              <Button variant="outline-secondary" id="button-addon1">
                Search
              </Button>
              <Form.Control type="search" aria-describedby="basic-addon1" style={{ height: "48px" }} />
            </InputGroup>
          </div>
          <div className="col-md-6">
            <div>
              <img src={recipe12} alt="recipe" style={{ display: "none", width: "600px", position: "absolute", zIndex: "-1" }} />
            </div>
          </div>
        </div>
        <section></section>
        <div id="popular">
          {/* Popular for you */}
          <div className="flex-row border" style={{ marginTop: "115px" }}>
            <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "120px" }}></div>

            <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular For You !</h3>
          </div>
          {/* Popular for you */}
          <div className="row mt-5 border" style={{ width: "100%" }}>
            <div className="col-md-6 col-sm-12">
              <div style={{ top: "85px", left: "250px", zIndex: "-1", position: "absolute" }}>
                <div style={{ border: "4px solid #EFC81A", height: "500px", width: "400px" }}></div>
              </div>
              <img src={recipe1} alt="1" style={{ height: "550px", paddingLeft: "40px" }} />
            </div>
            <div className="col-md-6 col-sm-12" style={{ marginTop: "150px", paddingLeft: "30px" }}>
              <h1>
                Healthy Bone Broth <br /> Ramen (Quick& Easy)
              </h1>
              <div style={{ border: "1px solid black", width: "50px" }}></div>
              <div className="mt-2">
                <h3>
                  Quick + Easy Chicken Bone Broth Ramen- <br /> Healthy chicken ramen in a hurry? That's right!
                </h3>
                <div className="text-center">
                  <Link to={"/detailRecipe"}>
                    <Button variant="warning">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="newrecipe">
          {/* New Recipe */}
          <div className="flex-row" style={{ marginTop: "90px" }}>
            <div className="col-1">
              <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
            </div>
            <div className="col">
              <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>New Recipe!</h3>
            </div>
          </div>
          {/* New Recipe */}
          <div className="row border" style={{ marginTop: "50px", width: "100%" }}>
            <div className="col-md-6 col-sm-12">
              <img src={recipe3} alt="1" style={{ height: "550px", paddingLeft: "30px" }} />
            </div>
            <div className="col-md-6 col-sm-12" style={{ marginTop: "150px", paddingLeft: "30px" }}>
              <h1>
                Healthy Bone Broth <br /> Ramen (Quick& Easy)
              </h1>
              <div style={{ border: "1px solid black", width: "50px" }}></div>
              <div className="mt-2">
                <h3>
                  Quick + Easy Chicken Bone Broth Ramen- <br /> Healthy chicken ramen in a hurry? That's right!
                </h3>
                <div className="text-center">
                  <Link to={"/detailRecipe"}>
                    <Button variant="warning">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popularrecipe">
          {/* Popular for you */}
          <div className="flex-row" style={{ marginTop: "90px" }}>
            <div className="col-1">
              <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
            </div>
            <div className="col">
              <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular Recipe</h3>
            </div>
          </div>
          {/* Popular for you */}
          {JSON.stringify(recipes)}
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        {/* </div> */}
        <div className="mt-5">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
