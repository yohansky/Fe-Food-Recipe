import React from "react";

const PopularRecipe = () => {
  return (
    <>
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
    </>
  );
};

export default PopularRecipe;
