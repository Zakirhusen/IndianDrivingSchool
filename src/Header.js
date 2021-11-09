import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-wrap">
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
      </header>
    </>
  );
};
export default Header;
