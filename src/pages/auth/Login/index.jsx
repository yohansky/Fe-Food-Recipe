import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import logobg from "../../../assets/img/bglogin.png";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  //   console.log(formData);
  // };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      navigate("/landingpage");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    //untuk ambil user id harus taruh di handlesubmit, bukan di useeffect
    e.preventDefault();
    try {
      axios.post(`http://localhost:8080/login`, formData, { withCredentials: true }).then((res) => {
        console.log(res.data.UserId);
        localStorage.setItem("token", res.data.Token);
        localStorage.setItem("userid", res.data.Id);
        //ambil userid ddari respon
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate("/landingpage");
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Login error",
          text: error.response.data.message,
        });
        console.error("Login error:", error.response.data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "An error occurred while processing your request. Please try again later.",
        });
        console.error("Login error:", error);
      }
    }
  };

  return (
    <>
      <main id="login">
        <div className="row border" style={{ height: "730px" }}>
          <div className="col-6">
            <div style={{ position: "absolute", zIndex: "-1" }}>
              <img src={logobg} alt="logobg" style={{ objectFit: "cover", width: "743px", height: "740px", backgroundImage: "linear-gradient(#EFC81A, #EFC81A)" }} />
            </div>
            <div>
              <img src={logo} alt="logo" style={{ marginTop: "250px", marginLeft: "250px" }} />
            </div>
          </div>
          <div className="col-6">
            <div className="" style={{ marginTop: "100px", marginLeft: "100px" }}>
              <h2 style={{ color: "#EFC81A", textAlign: "center" }}>Welcome</h2>
              <h5 className="mt-3" style={{ color: "#8692A6", textAlign: "center" }}>
                Log in into your exiting account
              </h5>
              <div className="mt-4" style={{ paddingLeft: "90px" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      name="Email"
                      value={formData.Email}
                      size="lg"
                      type="email"
                      placeholder="name@example.com"
                      onChange={handleChange}
                      required
                      style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="Password"
                      value={formData.Password}
                      size="lg"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                      style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }}
                    />
                  </Form.Group>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-4 mt-4">
                      <Form.Check type={type} id={`default-${type}`} label={`i agree to terms & conditions`} />
                    </div>
                  ))}

                  <div className="mb-2">
                    <Button type="submit" variant="warning" size="lg" style={{ width: "426px" }}>
                      Log in
                    </Button>

                    <Link to={"/auth/Forgot"}>
                      <p className="mt-2 text-secondary" style={{}}>
                        Forgot Password
                      </p>
                    </Link>
                    <p className="mt-2" style={{ textAlign: "center" }}>
                      Don't have an account?
                      <Link to={"/auth/Register"}>
                        <a style={{ color: "#EFC81A" }}>Sign up</a>
                      </Link>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
