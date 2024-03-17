import React, { useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import profilepic from "../../assets/img/profilepic.png";
import edit from "../../assets/img/edit.png";
import { Button, Nav, Tab } from "react-bootstrap";
import recipe1 from "../../assets/img/recipe10.png";
import recipe2 from "../../assets/img/recipe11.png";
import Footer from "../../components/Footer";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("link-1");

  return (
    <div>
      <NavbarLogin />
      <div style={{ marginTop: "244px", marginLeft: "874px" }}>
        <img src={profilepic} alt="profilepic" />
        <Button style={{ backgroundColor: "white", position: "absolute", height: "20px", borderColor: "white" }}>
          <img src={edit} alt="edit" style={{ marginTop: "140px" }} />
        </Button>
        <h4 style={{ fontWeight: "500", fontSize: "24px", marginTop: "40px" }}>Garneta Sharina</h4>
      </div>
      {/*  */}
      <div style={{ marginTop: "100px", marginLeft: "125px" }}>
        <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
          <Nav variant="tabs" defaultActiveKey="link-1" style={{}}>
            <Nav.Item>
              <Nav.Link eventKey="link-1" style={{ fontWeight: "500", fontSize: "24px", color: "black" }}>
                My Recipe
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{ fontWeight: "500", fontSize: "24px", color: "black", marginLeft: "100px" }}>
                Saved Recipe
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" style={{ fontWeight: "500", fontSize: "24px", color: "black", marginLeft: "100px" }}>
                Liked Recipe
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            <Tab.Content>
              <Tab.Pane eventKey="link-1">
                <h3>Halaman My Recipe</h3>
                <div className="row">
                  <div className="col-4">
                    <div className="card" style={{ width: "370px", height: "250px" }}>
                      <img src={recipe1} alt="recipe1" />
                      <h4 style={{ zIndex: "1", position: "absolute", marginTop: "150px", marginLeft: "25px", color: "#FFF5EC", fontSize: "28px", fontWeight: "500" }}>Bomb Chicken</h4>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card" style={{ width: "370px", height: "250px" }}>
                      <img src={recipe2} alt="recipe2" />
                      <h4 style={{ zIndex: "1", position: "absolute", marginTop: "150px", marginLeft: "25px", color: "#FFF5EC", fontSize: "28px", fontWeight: "500" }}>Bananas Pancake</h4>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="link-2">
                <h3>Halaman Saved Recipe</h3>
                <div className="row">
                  <div className="col-4">
                    <div className="card" style={{ width: "370px", height: "250px" }}>
                      <img src={recipe1} alt="recipe1" />
                      <h4 style={{ zIndex: "1", position: "absolute", marginTop: "150px", marginLeft: "25px", color: "#FFF5EC", fontSize: "28px", fontWeight: "500" }}>Bomb Chicken</h4>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card" style={{ width: "370px", height: "250px" }}>
                      <img src={recipe2} alt="recipe2" />
                      <h4 style={{ zIndex: "1", position: "absolute", marginTop: "150px", marginLeft: "25px", color: "#FFF5EC", fontSize: "28px", fontWeight: "500" }}>Bananas Pancake</h4>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="link-3">
                <h3>Halaman Liked Recipe</h3>
                <div className="row">
                  <div className="col-4">
                    <div className="card" style={{ width: "370px", height: "250px" }}>
                      <img src={recipe1} alt="recipe1" />
                      <h4 style={{ zIndex: "1", position: "absolute", marginTop: "150px", marginLeft: "25px", color: "#FFF5EC", fontSize: "28px", fontWeight: "500" }}>Bomb Chicken</h4>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card" style={{ width: "370px", height: "250px" }}>
                      <img src={recipe2} alt="recipe2" />
                      <h4 style={{ zIndex: "1", position: "absolute", marginTop: "150px", marginLeft: "25px", color: "#FFF5EC", fontSize: "28px", fontWeight: "500" }}>Bananas Pancake</h4>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
      <div style={{ marginTop: "65px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
