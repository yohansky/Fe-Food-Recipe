import React, { useEffect, useState } from "react";
import NavbarProfile from "../../components/NavbarProfile";
import Discover from "../../components/Discover";
import PopularForYou from "../../components/PopularForYou";
import NewRecipe from "../../components/NewRecipe";
import PopularRecipe from "../../components/PopularRecipe";
import { Container, Nav, Navbar, Form, Card } from "react-bootstrap";
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
      .get(`http://localhost:8080/recipes`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.data);

        setRecipes(res.data.data);
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

  const displayedRecipes = recipes.slice(0, 6);

  return (
    <>
      <main id="landingpage">
        {token && userId ? <NavbarProfile /> : <NavbarLogin />}

        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6" style={{ paddingTop: "80px" }}>
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
            <div className="col-lg-6 col-md-6" style={{ marginTop: "3vh" }}>
              {/* <img src={recipe12} alt="recipe" style={{ width: "600px", position: "absolute", zIndex: "-1" }} /> */}
              <img src={recipe12} alt="recipe" style={{ width: "100%" }} />
            </div>
          </div>
          <section>
            <div id="popular">
              {/* Popular for you */}
              <div className="flex-row" style={{ marginTop: "115px" }}>
                <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "120px" }}></div>

                <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular For You !</h3>
              </div>
              {/* Popular for you */}
              <div className="row mt-5" style={{ width: "100%" }}>
                <div className="col-lg-6 col-md-6 col-6">
                  <div style={{ top: "35px", left: "150px", zIndex: "-1", position: "absolute" }}>
                    <div style={{ border: "4px solid #EFC81A", height: "500px", width: "400px" }}></div>
                  </div>
                  <img src={recipe1} alt="1" style={{ height: "500px" }} />
                </div>
                <div className="col-lg-6 col-md-6 col-6" style={{ marginTop: "150px", paddingLeft: "80px" }}>
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
          </section>
          <div id="newrecipe">
            {/* New Recipe */}
            <div className="flex-row" style={{ marginTop: "90px" }}>
              <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>

              <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "10px" }}>New Recipe!</h3>
            </div>
            {/* New Recipe */}
            <div className="row" style={{ marginTop: "50px", width: "100%" }}>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={recipe3} alt="1" style={{ height: "500px" }} />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12" style={{ marginTop: "150px", paddingLeft: "80px" }}>
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
            {/* {JSON.stringify(recipes)} */}
            <div className="row" style={{ marginTop: "5vh", marginLeft: "2vw" }}>
              {displayedRecipes.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 cardWarp">
                  <Link>
                    <Card className="text-white" style={{ border: "1px solid" }}>
                      <Card.Img src={item.Photo} alt="gambar2" style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }} />
                      <Card.ImgOverlay>
                        <Card.Title style={{ marginTop: "20vh" }}>{item.Name}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
