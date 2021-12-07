import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./indianDrivingSchool.css";
import "./indianDrivingSchoolResponsive.css";
import { BrowserRouter } from "react-router-dom";

console.log("Creating of Indian Driving School Website ");
ReactDOM.render(
    <>
     <BrowserRouter>
       <App/>
    </BrowserRouter>
  </>,
document.getElementById("root"))

