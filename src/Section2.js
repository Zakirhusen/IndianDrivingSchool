import React from "react";
import carImg  from "./images/bg2.png"

const Section2 = () => {
  return (
    <>
      <div className="section2-container dflex-all">
        <div className="section2-img dflex-all ">
          <img src={carImg} alt="" />
        </div>
        <div className="section2-text dflex">
          <h1>Are you ready?</h1>
          <p>
            Since 2010, throughout the area, School of Driving has earned a
            reputation for responsible and caring driving instruction.
            Throughout Ranebennur and others, wherever you live, with our
            professional and friendly local driving instructors, you’ll enjoy a
            relaxed, positive and encouraging environment as you start your
            driving lessons and learn to drive.
          </p>
          <div className="right-mark-text">
            <div>
              <div>
                <span className="right-mark">&#10004;</span>We know all of the
                different test routes
              </div>
              <div>
                <span className="right-mark">&#10004;</span>Plate Learn with a
                company that cares, more than just an offer!
              </div>
              <div>
                <span className="right-mark">&#10004;</span>Plate First driving
                lessons from just $20
              </div>
            </div>
          </div>
          <button className="btn-section2">book now</button>
        </div>
      </div>
      <div className="section2-bottom-container dflex-all">
        <div className="section2-bottom dflex">
          <h2>Schedule <span>Your Driving Lessons</span> with Us!</h2>
          <p>
            Book our taster lesson and meet your personal driving instructor
          </p>
          <p className='tel'>974-199-9828</p>
        </div>
        <div className="section2-bottom-icon">
          <img src="./images/triangleIcon.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Section2;
