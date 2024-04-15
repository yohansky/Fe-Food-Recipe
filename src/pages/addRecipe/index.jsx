import React, { useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import addPhoto from "../../assets/img/addphoto.png";
import { Form, Button } from "react-bootstrap";
import Footer from "../../components/Footer";
import axios from "axios";
import NavbarProfile from "../../components/NavbarProfile";

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
      await axios.post("https://food-recipe-api-production.up.railway.app/api/v1/recipe/create", formData);
      alert("Resep berhasil Ditambahkan");
      // handleClose();
      window.location.reload();
    } catch (error) {
      alert("Error Posting recipe");
      console.error(error);
    }
  };

  return (
    <>
      <NavbarProfile />
      <div style={{ marginLeft: "90px", marginRight: "90px" }}>
        <div style={{ marginTop: "78px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control type="file" id="file-input" accept=".png,.jpg,.jpeg" style={{ backgroundColor: "#F6F5F4" }} />
            </Form.Group>

            <div className="card" style={{ marginTop: "40px" }}>
              <Form.Control type="text" name="Title" value={formData.Title} placeholder="Title" style={{ backgroundColor: "#F6F5F4", paddingLeft: "20px" }} onChange={handleChange} required />
            </div>
            <div className="card" style={{ marginTop: "40px" }}>
              <Form.Control
                as="textarea"
                name="Ingredient"
                value={formData.Ingredient}
                placeholder="Ingredients"
                style={{ height: "380px", backgroundColor: "#F6F5F4", fontSize: "18px", paddingLeft: "20px", paddingTop: "20px" }}
                onChange={handleChange}
                required
              />
            </div>
            <div className="card" style={{ marginTop: "40px" }}>
              <Form.Control type="text" name="VideoUrl" value={formData.VideoUrl} placeholder="Video" style={{ backgroundColor: "#F6F5F4", fontSize: "18px", paddingLeft: "20px" }} onChange={handleChange} required />
            </div>

            <div style={{ marginTop: "123px", marginLeft: "433px" }}>
              <Button type="submit" variant="warning" size="lg" style={{ width: "426px", height: "64px" }}>
                Post
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
};

export default AddRecipe;
