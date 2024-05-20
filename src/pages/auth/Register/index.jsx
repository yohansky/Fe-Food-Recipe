import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import logobg from "../../../assets/img/bglogin.png";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const { name, email, phoneNumber, newPassword, confirmPassword, agreeTerms } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here
    if (name.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || newPassword.trim() === "" || confirmPassword.trim() === "") {
      alert("Harap isi semua kolom formulir.");
      return;
    }
    if (!agreeTerms) {
      alert("Anda harus menyetujui syarat dan ketentuan.");
      return;
    }
  };

  return (
    <>
      <main id="register">
        <div className="row" style={{ height: "730px" }}>
          <div className="col-6">
            <div style={{ position: "absolute", zIndex: "-1" }}>
              <img src={logobg} alt="logobg" style={{ objectFit: "cover", width: "743px", height: "740px", backgroundImage: "linear-gradient(#EFC81A, #EFC81A)" }} />
            </div>
            <div>
              <img src={logo} alt="logo" style={{ marginTop: "250px", marginLeft: "250px" }} />
            </div>
          </div>
          <div className="col-6" style={{ paddingRight: "100px" }}>
            <div className="" style={{ marginTop: "45px", marginLeft: "100px" }}>
              <h2 style={{ color: "#EFC81A", textAlign: "center" }}>Let's Get Started !</h2>
              <h5 className="mt-3" style={{ textAlign: "center" }}>
                Create new account to access all features
              </h5>
              <div className="mt-4" style={{ paddingLeft: "90px" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="sm" type="text" name="name" value={name} onChange={handleInputChange} placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control size="sm" type="email" name="email" value={email} onChange={handleInputChange} placeholder="Enter email address" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control size="sm" type="tel" name="phoneNumber" value={phoneNumber} onChange={handleInputChange} placeholder="08xxxxxxxxxx" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="newPassword">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control size="sm" type="password" name="newPassword" value={newPassword} onChange={handleInputChange} placeholder="Create New Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control size="sm" type="password" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
                  </Form.Group>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-4 mt-4">
                      <Form.Check type="checkbox" id={`default-checkbox`} label={`I agree to terms & conditions`} name="agreeTerms" checked={agreeTerms} onChange={handleInputChange} />
                    </div>
                  ))}

                  <div className="mb-2">
                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      style={{ width: "426px" }}
                      disabled={name.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || newPassword.trim() === "" || confirmPassword.trim() === "" || !agreeTerms}
                      href="/auth/Login"
                    >
                      Sign Up
                    </Button>

                    <p className="mt-2" style={{ textAlign: "center" }}>
                      Already have an account?{" "}
                      <a href="/auth/Login" style={{ color: "#EFC81A" }}>
                        Log In Here
                      </a>
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

export default Register;
