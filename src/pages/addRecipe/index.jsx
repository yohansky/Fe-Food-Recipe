import React, { useEffect, useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import addPhoto from "../../assets/img/addphoto.png";
import { Form, Button } from "react-bootstrap";
import Footer from "../../components/Footer";
import axios from "axios";
import NavbarProfile from "../../components/NavbarProfile";

const AddRecipe = () => {
  const [saveImage, setSaveImage] = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    //useeffect akan membaca perubahan data
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
    // ambil userid dari getitem localstorage (sama seperti conditional rendering navbar di landingpage)
  }, [token, userId]);
  const [formData, setFormData] = useState({
    Title: "",
    Ingredient: "",
    VideoUrl: "",
    Thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("UserId", userId);
    //userid diambil dari getitem (local storage)
    dataForm.append("Title", formData.Title);
    dataForm.append("Ingredient", formData.Ingredient);
    dataForm.append("VideoUrl", formData.VideoUrl);
    dataForm.append("Thumbnail", saveImage);
    try {
      await axios.post("https://be-food-recipe-prod-production.up.railway.app/api/v1/recipe/create", dataForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
            <Form.Group className="mb-4">
              <Form.Control name="Thumbnail" type="file" id="file-input" accept=".png,.jpg,.jpeg" style={{ backgroundColor: "#F6F5F4" }} onChange={handleUpload} />
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
