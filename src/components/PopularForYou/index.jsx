import React from "react";

const PopularForYou = () => {
  return (
    <>
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
    </>
  );
};

export default PopularForYou;
