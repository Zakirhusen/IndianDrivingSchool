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
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
