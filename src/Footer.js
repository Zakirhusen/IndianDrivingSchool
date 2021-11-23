import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-main dflex">
        <div className="footer-item-container dflex-all">
          <div className="footer-item logo-footer dflex">
            <div className="logo-img-footer dflex-all">
              <img src="./images/logoWhite.png" alt="" />
            </div>
            <p className="footer-para">
              We provide a reputable and professional service that aims to give
              you the confidence to pass your test and drive safely on the
              roads.
            </p>
          </div>
          <div className="footer-item dflex-all information">
            <div className="info">
              <h3>Information</h3>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
              </ul>
            </div>
            <span className="vertical-footer"></span>
            <div className="customer-service">
              <h3>Cutomer Service</h3>
              <ul>
                <li>
                  <a href="#">Search Terms</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-item phone-social-icon-footer dflex-all">
            <div className="social-icons-footer">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-whatsapp "></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-google"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-footer dflex-all  ">
              <div className="logo-img-footer-right">
                <img src="./images/logo.png" alt="" />
              </div>
              <div className="phone-footer address">
                <a href="www.google.com">
                  <i className="bi bi-telephone-outbound"></i>
                  <span>974-199-9828</span>
                </a>
                
              </div>
              <div className="address address-footer">
              <a href="www.google.com">
                {/* <i className="bi bi-geo-alt-fill"></i> */}
                Halgeri Road Ranebennur - <span>581115</span>
              </a>
            </div>
            </div>
          </div>
        </div>
        <p className="copyright">© 2021 Safe Drive Driving School.</p>
      </div>
    </>
  );
};

export default Footer;
