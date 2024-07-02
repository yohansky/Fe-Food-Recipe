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
    Name: "",
    Ingredient: "",
    VideoUrl: "",
    Photo: "",
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
    dataForm.append("Name", formData.Name);
    dataForm.append("Ingredient", formData.Ingredient);
    dataForm.append("VideoUrl", formData.VideoUrl);
    dataForm.append("Photo", saveImage);
    try {
      await axios.post(
        "http://localhost:8080/recipes",
        dataForm,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
        <h3 className="mt-2" style={{ textAlign: "center" }}>
          Share Your Most Delicious Food Ever Made !
        </h3>
        <div style={{ marginTop: "3vh" }} className="d-flex flex-row justify-content-center">
          <Form onSubmit={handleSubmit} className="w-75">
            <Form.Group className="mb-2">
              <Form.Control name="Photo" type="file" id="file-input" accept=".png,.jpg,.jpeg" style={{ backgroundColor: "#F6F5F4" }} onChange={handleUpload} />
            </Form.Group>

            <div style={{ marginTop: "3vh" }}>
              <Form.Control type="text" name="Name" value={formData.Name} placeholder="Name" style={{ backgroundColor: "#F6F5F4", paddingLeft: "20px" }} onChange={handleChange} required />
            </div>
            <div style={{ marginTop: "3vh" }}>
              <Form.Control
                as="textarea"
                name="Ingredient"
                value={formData.Ingredient}
                placeholder="Ingredients"
                style={{ height: "30vh", backgroundColor: "#F6F5F4", fontSize: "18px", paddingLeft: "20px", paddingTop: "20px" }}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ marginTop: "3vh" }}>
              <Form.Control type="text" name="VideoUrl" value={formData.VideoUrl} placeholder="Video" style={{ backgroundColor: "#F6F5F4", fontSize: "18px", paddingLeft: "20px" }} onChange={handleChange} required />
            </div>
            <div style={{ marginTop: "3vh", textAlign: "center" }}>
              <Button type="submit" variant="warning" size="lg" style={{ width: "15vw", height: "7vh" }}>
                Post
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div style={{ marginTop: "5vh" }}>
        <Footer />
      </div>
    </>
  );
};

export default AddRecipe;
