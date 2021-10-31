import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <div className="header-top">
            <address className="address">
              <a href="www.google.com">
                <i class="bi bi-geo-alt-fill"></i>
                Halgeri Road Ranebennur - <span>581115</span>
              </a>
            </address>
            <address className="address">
              <a href="www.google.com">
                <i class="bi bi-telephone-outbound"></i>
                <span>974-199-9828</span>
              </a>
            </address>
            <address className="address">
              <a href="www.google.com">
                <i class="bi bi-envelope"></i>
                syedshfiulla48@gmail.com
              </a>
            </address>
            <address className="address">
              <i class="bi bi-clock"></i>
              9:00 AM to 6:00 PM / 6 Days
            </address>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>  
                <a href="#">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-google"></i>
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
