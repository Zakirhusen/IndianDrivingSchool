import React, { useEffect } from "react";

const Section1 = () => {

  useEffect(() => {
    let dataItems= document.querySelectorAll('.total-data-items');
    let dataItemsLen=dataItems.length;
    let i=0;
    setInterval(() => {
      dataItems.forEach(element => {
        element.classList.remove('inActive')
      });
      dataItems[i%dataItemsLen].classList.add('inActive')
      dataItems[(i+1)%dataItemsLen].classList.add('inActive')
      i++;
    }, 4000);
  }, [])
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
              <p>We learns even a noob</p>
              <span className="color">learn </span> &
              <span className="color"> practice</span> defencive driving
            </div>
          </div>
        </div>

        <div className="total-data-container dflex-all">
          <div className="total-data dflex-all">
            <div className="dflex-all total-data-items">
              <i className="fa fa-business-time"></i>
              <div className="data">
                <h4>20</h4>
                <p>working years</p>
              </div>
            </div>
            <div className="dflex-all total-data-items">
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
            <div className="dflex-all total-data-items">
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
