import React from "react";

const Tes = () => {
  return (
    <>
      <main id="tes">
        Halo <span />
        ini adalah <span /> testing grid
        <div style={{ left: "10px", padding: "50px 100px" }}>
          <div className="row border" style={{ height: "100px" }}>
            <div className="col border " style={{ display: "grid" }}></div>
            <div className="col border" style={{ display: "grid" }}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tes;
