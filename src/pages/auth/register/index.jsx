import React from 'react'
import { Button, Form } from "react-bootstrap";
import logobg from "../../../assets/img/bglogin.png";

const Register = () => {
  return (
    <>
      <main id="register">
        <div className="row">
          <div className="col-6">
            <img src={logobg} alt="logobg" className="background-image" style={{ width: "960px", height: "1805px", position: "absolute", zIndex: "0", backgroundImage: "linear-gradient(#EFC81A, #EFC81A)" }} />
            <div className="row">
              <div className="col-12">
                <img src={logo} alt="logo" style={{ marginTop: "480px", zIndex: "1", marginLeft: "389px" }} />
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            form
            <div className="" style={{ marginTop: "529px", marginLeft: "200px" }}>
              <h2 style={{ color: "yellow", textAlign: "center" }}>Let's Get Started !</h2>
              <h5 className="mt-3" style={{ textAlign: "center" }}>
                Create new account to access all features
              </h5>
              <div className="mt-4">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="lg" type="name" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="Enter email adress" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control size="lg" type="phone number" placeholder="08xxxxxxxxxx" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control size="lg" type="password" placeholder="Create New Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Password</Form.Label>
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
                    Register Account
                  </Button>
                  <p className="mt-2" style={{ textAlign: "center" }}>
                    Already have account? <a href="#" style={{ color: "yellow"}}>Log In Here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Register