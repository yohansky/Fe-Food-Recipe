<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import logobg from "../../../assets/img/bglogin.png";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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

=======
import React from "react";
import logo from "../../../assets/logo.png";
import logobg from "../../../assets/img/bglogin.png";
import { Button, Form } from "react-bootstrap";

const Login = () => {
>>>>>>> 0d1d0aa6df73378a777c4af5db6d8c74e8a81d02
  return (
    <>
      <main id="login">
        <div className="row">
          <div className="col-6">
            <img src={logobg} alt="logobg" className="background-image" style={{ width: "960px", height: "1805px", position: "absolute", zIndex: "0", backgroundImage: "linear-gradient(#EFC81A, #EFC81A)" }} />
            <div className="row">
<<<<<<< HEAD
              <div className="col-6">
=======
              <div className="col-12">
>>>>>>> 0d1d0aa6df73378a777c4af5db6d8c74e8a81d02
                <img src={logo} alt="logo" style={{ marginTop: "480px", zIndex: "1", marginLeft: "389px" }} />
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="d-flex justify-content-center">
            <div className="" style={{ marginTop: "350px", marginLeft: "230px" }}>
              <h2 style={{ color: "#EFC81A", textAlign: "center" }}>Welcome</h2>
              <h5 className="mt-3" style={{ color: "#8692A6", textAlign: "center" }}>
                Log in into your exiting account
              </h5>
              <div className="mt-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="name@example.com" required style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size="lg" type="password" placeholder="Password" required style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }} />
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
                      <p className="mt-2 text-secondary" style={{ textAlign: "right" }}>
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
=======
          <div className="col-6 d-flex justify-content-center">
            form
            <div className="" style={{ marginTop: "529px", marginLeft: "200px" }}>
              <h2 style={{ color: "yellow", textAlign: "center" }}>Welcome</h2>
              <h5 className="mt-3" style={{ textAlign: "center" }}>
                Log in into your exiting account
              </h5>
              <div className="mt-4">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size="lg" type="password" placeholder="Password" />
                  </Form.Group>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-4">
                      <Form.Check type={type} id={`default-${type}`} label={`i agree to terms & conditions`} />
                    </div>
                  ))}
                </Form>
                <div className="mb-2">
                  <Button variant="warning" size="lg" style={{ width: "426px" }}>
                    Log in
                  </Button>
                  <p className="mt-2" style={{ textAlign: "right" }}>
                    Forgot Password
                  </p>
                </div>
>>>>>>> 0d1d0aa6df73378a777c4af5db6d8c74e8a81d02
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
