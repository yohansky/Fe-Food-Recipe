import React from "react";
import { Button } from "react-bootstrap";

const NewRecipe = () => {
  return (
    <>
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
      </div>
      {/* Card New Recipe */}
    </>
  );
};

export default NewRecipe;
