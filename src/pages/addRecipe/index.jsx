import React from "react";
import NavbarLogin from "../../components/NavbarLogin";
import addPhoto from "../../assets/img/addphoto.png";
import { Form, Button } from "react-bootstrap";
import Footer from "../../components/Footer";

const AddRecipe = () => {
  return (
    <>
      <NavbarLogin />
      <div style={{ marginTop: "208px", marginLeft: "310px" }}>
        <Form>
          <div className="card" style={{ width: "1300px", height: "480px", backgroundColor: "#F6F5F4" }}>
            <div style={{ marginTop: "174px" }}>
              <img src={addPhoto} alt="addphoto" style={{ color: "#666666", width: "64px", height: "64px", marginLeft: "620px" }} />
              <h5 className="mt-2" style={{ fontWeight: "500", fontSize: "24px", marginLeft: "600px" }}>
                Add Photo
              </h5>
            </div>
          </div>
          <div className="card" style={{ marginTop: "40px", width: "1300px", height: "100px" }}>
            <Form.Control size="lg" type="text" placeholder="Title" style={{ width: "1300px", height: "100px", backgroundColor: "#F6F5F4", fontSize: "24px", paddingLeft: "60px" }} />
          </div>
          <div className="card" style={{ marginTop: "40px", width: "1300px", height: "380px" }}>
            <Form.Control as="textarea" placeholder="Ingredients" style={{ width: "1300px", height: "380px", backgroundColor: "#F6F5F4", fontSize: "24px", paddingLeft: "40px", paddingTop: "35px" }} />
          </div>
          <div className="card" style={{ marginTop: "40px", width: "1300px", height: "100px" }}>
            <Form.Control size="lg" type="text" placeholder="Video" style={{ width: "1300px", height: "100px", backgroundColor: "#F6F5F4", fontSize: "24px", paddingLeft: "40px" }} />
          </div>
        </Form>
        <div style={{ marginTop: "123px", marginLeft: "433px" }}>
          <Button variant="warning" size="lg" style={{ width: "426px", height: "64px" }}>
            Post
          </Button>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
};

export default AddRecipe;
