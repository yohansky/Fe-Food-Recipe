import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Home from "../../pages/home";
import Forgot from "../../pages/auth/Forgot";
import Confirm from "../../pages/auth/Confirm";
import Register from "../../pages/auth/Register";
import AddRecipe from "../../pages/addRecipe";
import DetailRecipe from "../../pages/detailRecipe";
import Profile from "../../pages/profile";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/auth/Login"} replace="true" />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/Forgot" element={<Forgot />} />
          <Route path="/auth/Register" element={<Register />} />
          <Route path="/auth/Confirm" element={<Confirm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/detailRecipe" element={<DetailRecipe />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
