import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "./images/logo.png";

const NavbarMenu = (props) => {
  
  
  return (
    <>
      <div className={`navbar ${props.displayState}`}>
        <ul className="nav-item-container justify-content-space-bet dflex align-items">
          <li>
            <NavLink to="/" data-hover="home" onClick={()=>props.setToggleMenu()}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" data-hover="about us"  onClick={()=>props.setToggleMenu()}>
              about us
            </NavLink>
          </li>
          <li>
            <NavLink to="#" data-hover="programs" onClick={()=>props.setToggleMenu()}>
              programs
            </NavLink>
          </li>
          <li>
            <NavLink to="#" data-hover="testimonials" onClick={()=>props.setToggleMenu()}>
              testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" data-hover="contact" onClick={()=>props.setToggleMenu()}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
    // console.log(width)
  };
  window.addEventListener("resize", updateDimensions);
let setToggleMen=()=>{
  // console.log(toggleMenu)
setToggleMenu(!toggleMenu)
} 
let setToggleMens=()=>{
  // console.log(toggleMenu)
setToggleMenu(false)
} 
  return (
    <>
      <div className="navbar-main dflex align-items">
        <div className="navbar-wrapper justify-content dflex align-items">
          <div className="navbar-logo">
            <img src={img} alt="sdfsa" />
          </div>
          <NavbarMenu displayState={width > 650 ? "active" : "inActive"} setToggleMenu={setToggleMens} />
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
      <NavbarMenu setToggleMenu={setToggleMen} displayState={width > 650 | !toggleMenu ? "inActive" : "active"} />
    </>
  );
};
export default Navbar;
