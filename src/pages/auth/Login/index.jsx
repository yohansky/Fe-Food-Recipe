import React, { useEffect, useState } from "react";
import logomamarecipe from "../../../assets/logo.png";
import logobg from "../../../assets/img/bglogin.png";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import  './Login.css'

const Login = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setToken("token");
    localStorage.setItem("token", Date.now());
    navigate("/home");
  }

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <>
      <main className="container-fluid">
        <div className="row">
          {/* Banner */}
          <div className="col-6 d-flex justify-content-center align-items-center ">
            <div
              className="position-relative "
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src={logobg}
                alt="background1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundImage: "linear-gradient(#EFC81A, #EFC81A)",
                }}
              />
              <div
                className="position-absolute "
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Masukkan gambar logo di sini */}
                <img
                  src={logomamarecipe}
                  alt="logo"
                  style={{  width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
          {/*Akhir Banner*/}

          {/* Form Kanan */}
          <div className="col-6 border border-danger d-flex justify-content-center align-items-center   ">
            <div >
              <h2 style={{ color: "#EFC81A", textAlign: "center" }}>Welcome</h2>
              <h5
                className="mt-2"
                style={{ color: "#8692A6", textAlign: "center" }}
              >
                Log in into your exiting account
              </h5>

              
              <div className="mt-4 border border-danger">
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      // size="lg"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="form-control"
                      style={{
                        border: "1px solid #EFC81A",
                        height: "64px",
          
                        // paddingLeft: "30px",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      size="lg"
                      type="password"
                      placeholder="Password"
                      required
                      className= "formcontrol"
                      style={{
                        border: "1px solid #EFC81A",
                        height: "64px",
                        // paddingLeft: "30px",
                      }}
                    />
                  </Form.Group>

                  {/* I AGREE TERMS */}
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-4 mt-4">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`I agree to terms & conditions`}
                      />
                    </div>
                  ))}

                  <div className="mb-2">
                    <Button
                      type="submit"
                      variant="warning"
                      size="lg"
                      className="form-button"
                    >
                      Log in
                    </Button>

                    <Link to={"/auth/Forgot"}>
                      <p
                        className="mt-2 text-secondary"
                        style={{ textAlign: "right" }}
                      >
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
          {/* Akhir Form Kanan */}
          
        </div>
      </main>
    </>
  );
};

export default Login;
