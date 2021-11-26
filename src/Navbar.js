import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-wrapper justify-content dflex align-items">
          <div className="navbar-logo">
            <img src="./images/logo.png" alt="sdfsa" />
          </div>
          <div className="navbar ">
            <ul className="nav-item-container justify-content-space-bet dflex align-items">
              <li>
                <NavLink to="/" data-hover='home'>home</NavLink>
              </li>
              <li>
                <NavLink to="/about" data-hover='about us'>about us</NavLink>
              </li>
              <li>
                <a href="#" data-hover='programs'>programs</a>
              </li>
              <li>
                <a href="#" data-hover='testimonials'>testimonials</a>
              </li>
              <li>
                <NavLink to="/contact" data-hover='contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
