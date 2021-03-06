import React from "react";
import wheel from "./images/wheel.png";


const Section3 = () => {
  return (
    <>
      <div className="section3-moving-car-container">
        <div className="city-bg"></div>
        <div className="road-bg"></div>
        <div className="moving-car">
          {/* <img src="./images/carObj.png" alt="loading" /> */}
        </div>
        <div className="limiter"></div>
        <div className=" wheels left-wheel">
          <img src={wheel} alt="" />
        </div>
        <div className=" wheels right-wheel">
          <img src={wheel} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section3;
