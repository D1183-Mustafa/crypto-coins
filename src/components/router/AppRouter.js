import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header"
import Login from "../login/Login";
import Main from "../main/Main";
import Register from "../register/Register";
import Sepet from "../sepet/Sepet";


function AppRouter() {
  return(
  <Router>
      <Header/>
      <Routes>
          <Route path="/crypto-coins/" element={<Main/>}/>
          <Route path="/crypto-coins/login" element={<Login/>}/>
          <Route path="/crypto-coins/register" element={<Register/>}/>
          <Route path="/crypto-coins/sepet" element={<Sepet/>}/>
      </Routes>
      <Footer/>
  </Router>
  )}

export default AppRouter;
