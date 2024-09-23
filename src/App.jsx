import React from "react";
import "./App.css";
import './index.css'
import CustomerRouts from "./Routers/CustomerRouts";
import {  Route, Router, Routes } from "react-router-dom";
import AdminRoutes from "./Routers/AdminRoutes";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<CustomerRouts />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </ Routes>
  );
}

export default App;
