import React from "react";

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
                <a href="#" data-hover='home'>home</a>
              </li>
              <li>
                <a href="#" data-hover='about us'>about us</a>
              </li>
              <li>
                <a href="#" data-hover='programs'>programs</a>
              </li>
              <li>
                <a href="#" data-hover='testimonials'>testimonials</a>
              </li>
              <li>
                <a href="#" data-hover='contact us'>contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
