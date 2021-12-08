import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="" element={<Navbar />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
