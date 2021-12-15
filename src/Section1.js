import React, { useEffect, useState } from "react";

const Section1 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };
  window.addEventListener("resize", updateDimensions);

  useEffect(() => {
    let totalData = document.querySelector(".total-data");
    let inter;
    console.log("useeffect start");
    let dataItems = document.querySelectorAll(".total-data-items");
    if (width < 850) {
      // console.log(dataItems);
      let dataItemsLen = dataItems.length;
      let i = 0;
      inter = setInterval(() => {
        // if resize window animation time and setInterval time becomes same
        totalData.classList.remove("none");
        dataItems.forEach((element) => {
          element.classList.remove("inActive");
        });
        dataItems[i % dataItemsLen].classList.add("inActive");
        if (width<550) {
          dataItems[(i + 1) % dataItemsLen].classList.add("inActive");
          dataItems[(i + 2) % dataItemsLen].classList.add("inActive");
        } 
        if(width<750) {
          dataItems[(i + 1) % dataItemsLen].classList.add("inActive");
        }
        i++;
      }, 4000);
      return () => {
        // if resize window animation time and setInterval time becomes same
        clearInterval(inter);
        totalData.classList.add("none");
      };
    }
    else{
      dataItems.forEach((element) => {
        element.classList.remove("inActive");
      });
    }
  }, [width]);
  return (
    <>
      <div className="section1 dflex justify-items align-items">
        {/* div.main */}
        <div className="img-container dflex-all">
          <div className="text-div">
            <div className="">
              <p>Smart drivers can starts here</p>
              <span className="color">friendly </span> &
              <span className="color"> patience</span> instructors
            </div>
          </div>
          <div className="text-div-alt">
            <div className="">
              <p>We can learns even a noob</p>
              We learns to
              <span className="color"> Drive </span> &
              <span className="color"> perfectly</span> 
            </div>
          </div>
        </div>

        <div className="total-data-container dflex-all">
          <div className="total-data dflex-all">
        <div className={`dflex-all total-data-items ${width<750?'inActive':''}`}>
              <i className="fa fa-business-time"></i>
              <div className="data">
                <h4>20</h4>
                <p>working years</p>
              </div>
            </div>
            <div className={`dflex-all total-data-items ${width<550?'inActive':''}`}>
              <i className="far fa-clock"></i>
              <div className="data">
                <h4>3400</h4>
                <p>training hours</p>
              </div>
            </div>
            <div className="dflex-all total-data-items">
              <i className="fas fa-address-card"></i>
              <div className="data">
                <h4>5000+</h4>
                <p>license issued</p>
              </div>
            </div>
            <div className={`dflex-all total-data-items ${width<(850)?'inActive':''}`}>
              <i className="fas fa-users"></i>
              <div className="data">
                <h4>5</h4>
                <p>teachers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
