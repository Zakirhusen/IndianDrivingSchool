import { React, useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarMenu = (props) => {
  return (
    <>
      <div className={`navbar ${props.displayState}`}>
        <ul className="nav-item-container justify-content-space-bet dflex align-items">
          <li>
            <NavLink to="/" data-hover="home">
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" data-hover="about us">
              about us
            </NavLink>
          </li>
          <li>
            <a href="#" data-hover="programs">
              programs
            </a>
          </li>
          <li>
            <a href="#" data-hover="testimonials">
              testimonials
            </a>
          </li>
          <li>
            <NavLink to="/contact" data-hover="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

// export default NavbarMenu

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false     );
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
    // console.log(width)
  };
  window.addEventListener("resize", updateDimensions);

  return (
    <>
      <div className="navbar-main dflex align-items">
        <div className="navbar-wrapper justify-content dflex align-items">
          <div className="navbar-logo">
            <img src="./images/logo.png" alt="sdfsa" />
          </div>
          <NavbarMenu displayState={width > 650 ? "active" : "inActive"} />
        </div>
        <div
          className={` toggle-menu-container dflex-all ${
            width > 650 ? "inActive" : "active"
          }`}
        >
          <div className="toggle-menu menu-off" onClick={()=>setToggleMenu(!toggleMenu)}>
            <i className={`bi bi-x ${!toggleMenu?'inActive':'active'}`}></i>
          </div>
          <div className="toggle-menu menu-on" onClick={()=>setToggleMenu(!toggleMenu)}>
            <i className={`bi bi-list ${toggleMenu?'inActive':'active'}`}></i>
          </div>
        </div>
      </div>
      <NavbarMenu displayState={width > 650 | !toggleMenu ? "inActive" : "active"} />
    </>
  );
};
export default Navbar;
