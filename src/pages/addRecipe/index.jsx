import React, { useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import addPhoto from "../../assets/img/addphoto.png";
import { Form, Button } from "react-bootstrap";
import Footer from "../../components/Footer";
import axios from "axios";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Ingredient: "",
    Video: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://food-recipe-api-production.up.railway.app/api/v1/create", formData);
      alert("Resep berhasil Ditambahkan");
      handleClose();
      window.location.reload();
    } catch (error) {
      alert("Error Posting recipe");
      console.error(error);
    }
  };

  return (
    <>
      <NavbarLogin />
      <div style={{ marginTop: "208px", marginLeft: "310px" }}>
        <Form onSubmit={handleSubmit}>
          <div className="card" style={{ width: "1300px", height: "480px", backgroundColor: "#F6F5F4" }}>
            <div style={{ marginTop: "174px" }}>
              <img src={addPhoto} alt="addphoto" style={{ color: "#666666", width: "64px", height: "64px", marginLeft: "620px" }} />
              <h5 className="mt-2" style={{ fontWeight: "500", fontSize: "24px", marginLeft: "600px" }}>
                Add Photo
              </h5>
            </div>
          </div>
          <div className="card" style={{ marginTop: "40px", width: "1300px", height: "100px" }}>
            <Form.Control
              size="lg"
              type="text"
              name="Title"
              value={formData.Title}
              placeholder="Title"
              style={{ width: "1300px", height: "100px", backgroundColor: "#F6F5F4", fontSize: "24px", paddingLeft: "60px" }}
              onChange={handleChange}
            />
          </div>
          <div className="card" style={{ marginTop: "40px", width: "1300px", height: "380px" }}>
            <Form.Control
              as="textarea"
              name="Ingredient"
              value={formData.Ingredient}
              placeholder="Ingredients"
              style={{ width: "1300px", height: "380px", backgroundColor: "#F6F5F4", fontSize: "24px", paddingLeft: "40px", paddingTop: "35px" }}
              onChange={handleChange}
            />
          </div>
          <div className="card" style={{ marginTop: "40px", width: "1300px", height: "100px" }}>
            <Form.Control
              size="lg"
              type="text"
              name="VideoUrl"
              value={formData.VideoUrl}
              placeholder="Video"
              style={{ width: "1300px", height: "100px", backgroundColor: "#F6F5F4", fontSize: "24px", paddingLeft: "40px" }}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "123px", marginLeft: "433px" }}>
            <Button type="submit" variant="warning" size="lg" style={{ width: "426px", height: "64px" }}>
              Post
            </Button>
          </div>
        </Form>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
};

export default AddRecipe;
