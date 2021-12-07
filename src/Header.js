import React, { useEffect, useState } from "react";

const Header = () => {
  const [arrow, setArrow] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)
  const updateDimensions = () => {
    const width = window.innerWidth
    setWidth(width)
    // console.log(width)
  }
  window.addEventListener('resize', updateDimensions)
  return (
    <>
      <header className="header">
        <div className= {`header-wrap ${(!arrow|width>1080)?'active':'inActive'}`}>
          <div className="header-top dflex align-items">
            <address className="address">
              <a href="www.google.com">
                <i className="bi bi-geo-alt-fill"></i>
                Halgeri Road Ranebennur - <span>581115</span>
              </a>
            </address>
            <address className="address">
              <a href="www.google.com">
                <i className="bi bi-telephone-outbound"></i>
                <span>974-199-9828</span>
              </a>
            </address>
            <address className="address">
              <a href="www.google.com">
                <i className="bi bi-envelope"></i>
                syedshfiulla48@gmail.com
              </a>
            </address>
            <address className="address">
              <i className="bi bi-clock"></i>
              9:00 AM to 6:00 PM / 6 Days
            </address>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className=" fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`arrow dflex-all flex-col ${width<1080?'active':' inActive'}`} onClick={()=>setArrow(!arrow)}
>
          <i className={`bi bi-chevron-down ${arrow?'active':'inActive'}`} ></i>
          <i className={`bi bi-chevron-up ${arrow?'inActive':'active'}`} ></i>
        </div>
      </header>
    </>
  );
};
export default Header;
