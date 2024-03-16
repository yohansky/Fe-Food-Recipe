import React from "react";
import bg1 from "../../assets/img/BG.png";
import profilephoto from "../../assets/img/Usericon.png";
import sayur from "../../assets/img/makanan2.png";
import makanan from "../../assets/img/makanan1.png";
import bg2 from "../../assets/img/BG2.png";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar className="fixed-top">
        <Nav className="me-auto mt-4" style={{ marginLeft: "100px" }}>
          <Nav.Link href="" className="" style={{ color: "#2E266F", fontSize: "18px" }}>
            Home
          </Nav.Link>
          <Nav.Link href="" className="ml-5" style={{ color: "#2E266F", fontSize: "18px" }}>
            Add Recipe
          </Nav.Link>
          <Nav.Link href="" className="ml-5" style={{ color: "#2E266F", fontSize: "18px" }}>
            Profile
          </Nav.Link>
          <Nav.Link href="" style={{ marginLeft: "1150px" }}>
            <img src={profilephoto} alt="profile" />
          </Nav.Link>

          <Nav.Link href="" className="ml-1 mt-2" style={{ color: "#FFFFFF", fontSize: "18px" }}>
            <Link to={"/auth/Login"}>Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className="row">
        <div className="col" style={{ zIndex: "1", position: "absolute" }}>
          <div className="row" style={{ marginTop: "426px", marginLeft: "132px", zIndex: "1", position: "absolute" }}>
            <div className="col-7">
              <h2 className="mb-3" style={{ color: "#2E266F", fontSize: "72px", fontWeight: "700" }}>
                Discover Recipe & Delicious Food
              </h2>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button className="btn btn-outline-secondary" type="button">
                    button
                  </button>
                </div>
                <input type="text" className="form-control" placeholder="Search Recipe" aria-label="" style={{ width: "400px", height: "90" }} />
              </div>
            </div>
          </div>

          <img src={bg1} alt="background1" className="background-image" style={{ position: "absolute", zIndex: "0", width: "1920px", height: "1210px" }} />
          <img src={sayur} alt="backgroundsayur" className="background-image" style={{ position: "absolute", marginLeft: "1139px" }} />
          <img src={makanan} alt="backgroundmakanan" className="background-image" style={{ position: "absolute", marginLeft: "927px", marginTop: "250px" }} />
        </div>
      </div>
      {/* page 2 img baru */}
      <img src={bg2} alt="background2" style={{ position: "absolute", marginTop: "850px" }} />
      <div className="row" style={{ marginTop: "1040px", position: "absolute", zIndex: "0" }}>
        <div className="col">
          <div className="mt-3" style={{ zIndex: "1", position: "absolute", marginLeft: "135px" }}>
            {/* Popular for you */}
            <div className="row" style={{ marginTop: "250px" }}>
              <div className="col-1">
                <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
              </div>
              <div className="col">
                <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular For You !</h3>
              </div>
            </div>
            {/* Popular for you */}

            {/* Card recipe */}
            <div className="row" style={{ marginTop: "150px" }}>
              <div className="col-1">
                <div className="d-flex card" style={{ width: "639px", height: "636" }}>
                  <img src={require("../../assets/img/recipe1.png")} alt="popular1" />
                  <h4 style={{ zIndex: "1", position: "absolute", marginTop: "500px", marginLeft: "50px", color: "#FFF5EC", fontSize: "42px", fontWeight: "500" }}>Pizza Lamea</h4>
                </div>
              </div>
              <div className="col-1" style={{ marginLeft: "650px" }}>
                <div className="d-flex card" style={{ width: "639px", height: "636px" }}>
                  <img src={require("../../assets/img/recipe2.png")} alt="popular2" />
                  <h4 style={{ zIndex: "1", position: "absolute", marginTop: "500px", marginLeft: "50px", color: "#FFF5EC", fontSize: "42px", fontWeight: "500" }}>King Burger</h4>
                </div>
              </div>
            </div>
            {/* Card recipe */}

            {/* New Recipe */}
            <div className="row" style={{ marginTop: "250px" }}>
              <div className="col-1">
                <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
              </div>
              <div className="col">
                <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>New Recipe!</h3>
              </div>
            </div>
            {/* New Recipe */}

            <div style={{ marginTop: "95px" }}>
              <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "514px", height: "820px", marginTop: "" }}>
                {/* Card New Recipe */}
                <div className="row" style={{ marginTop: "81px", marginLeft: "135px", zIndex: "0", position: "absolute" }}>
                  <div className="col">
                    <div className="d-flex card" style={{ width: "800px", height: "800" }}>
                      <img src={require("../../assets/img/recipe3.png")} alt="popular1" />
                    </div>
                  </div>
                </div>
                {/* recipe desc */}
                <div style={{ marginLeft: "1130px", marginTop: "323px", width: "570px", height: "" }}>
                  <div className="row">
                    <div className="col-12">
                      <h3 style={{ fontSize: "56px" }}>Healty Bone Broth Ramen (Quick & Easy)</h3>
                      <div className="mt-5" style={{ border: "1px solid black", width: "100px" }}></div>
                      <div className="mt-5">
                        <h5 style={{ fontSize: "24px" }}>Quick + Easy Chicken Bone Broth Ramen-Healthy chicken in a hurry? That's right!</h5>
                      </div>
                      <Button variant="warning" size="lg" style={{ width: "200px", height: "64px", marginTop: "50px" }}>
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
                {/* recipe desc */}
              </div>
              {/* Card New Recipe */}
            </div>

            {/* PopularRecipe */}
            <div className="row" style={{ marginTop: "290px" }}>
              <div className="col-1">
                <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
              </div>
              <div className="col">
                <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular Recipe</h3>
              </div>
            </div>
            {/* Popular Recipe */}

            {/* card recipe 2 */}
            <div style={{ marginTop: "113px" }}>
              <div className="row">
                <div className="col-1">
                  <div className="d-flex card" style={{ width: "500px", height: "500px" }}>
                    <img src={require("../../assets/img/recipe4.png")} alt="popular4" />
                    <h4 style={{ zIndex: "1", position: "absolute", marginTop: "370px", marginLeft: "50px", color: "black", fontSize: "32px", fontWeight: "500" }}>Chicken Kare</h4>
                  </div>
                </div>
                <div className="col-1" style={{ marginLeft: "450px" }}>
                  <div className="d-flex card" style={{ width: "500px", height: "500px" }}>
                    <img src={require("../../assets/img/recipe5.png")} alt="popular5" />
                    <h4 style={{ zIndex: "1", position: "absolute", marginTop: "370px", marginLeft: "50px", color: "black", fontSize: "32px", fontWeight: "500" }}>Bomb Chicken</h4>
                  </div>
                </div>
                <div className="col-1" style={{ marginLeft: "450px" }}>
                  <div className="d-flex card" style={{ width: "500px", height: "500px" }}>
                    <img src={require("../../assets/img/recipe6.png")} alt="popular6" />
                    <h4 style={{ zIndex: "1", position: "absolute", marginTop: "370px", marginLeft: "50px", color: "black", fontSize: "32px", fontWeight: "500" }}>Banana Smothie Pop</h4>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "75px" }}>
                <div className="col-1">
                  <div className="d-flex card" style={{ width: "500px", height: "500px" }}>
                    <img src={require("../../assets/img/recipe7.png")} alt="popular4" />
                    <h4 style={{ zIndex: "1", position: "absolute", marginTop: "370px", marginLeft: "50px", color: "black", fontSize: "32px", fontWeight: "500" }}>Coffee Lava</h4>
                  </div>
                </div>
                <div className="col-1" style={{ marginLeft: "450px" }}>
                  <div className="d-flex card" style={{ width: "500px", height: "500px" }}>
                    <img src={require("../../assets/img/recipe8.png")} alt="popular5" />
                    <h4 style={{ zIndex: "1", position: "absolute", marginTop: "370px", marginLeft: "50px", color: "black", fontSize: "32px", fontWeight: "500" }}>Sugar Salmon</h4>
                  </div>
                </div>
                <div className="col-1" style={{ marginLeft: "450px" }}>
                  <div className="d-flex card" style={{ width: "500px", height: "500px" }}>
                    <img src={require("../../assets/img/recipe9.png")} alt="popular6" />
                    <h4 style={{ zIndex: "1", position: "absolute", marginTop: "370px", marginLeft: "50px", color: "black", fontSize: "32px", fontWeight: "500" }}>Indian Salad</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* card recipe 2 */}

            {/* jangan dihapus,batas background */}
          </div>

          {/* Footer */}

          <div style={{ marginTop: "4248px" }}>
            <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "1920px", height: "685px", position: "absolute" }}>
              <div style={{ marginTop: "247px", textAlign: "center" }}>
                <h3 style={{ fontWeight: "400", fontSize: "72px", textAlign: "center" }}>Eat,Cook,Repeat</h3>
                <h4 className="mt-4" style={{ fontSize: "24px", color: "#707070" }}>
                  Share Your Best Recipe By Uploading Here !
                </h4>
              </div>
              <div style={{ marginTop: "217px", marginLeft: "560px" }}>
                <div className="row">
                  <div className="col-2">Product</div>
                  <div className="col-2">Company</div>
                  <div className="col-2">Learn More</div>
                  <div className="col-2">Get in Touch</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}

          {/* bg page 2 & page 3 */}
        </div>
      </div>
    </div>
  );
};

export default Home;
