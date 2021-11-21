import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs-main-container">
        <div className="overview-main dflex align-items">
          <h2>School Overview</h2>
          <div className="overview-sub dflex-all">
            <div className="overview-img">
              <img src="./images/img4.jpg" alt="" />
            </div>
            <div className="overview-text dflex justify-content-space-bet flex-col">
              <h3>Affordable, Effective and Convenient Driving Lessons</h3>
              <p>
                Safe Drive Driving School has designed classes with the busy
                student in mind. We have a very flexible system of classes that
                allows students to take the classes in any order they wish and
                at their own pace. In some schools you have a very strict
                schedule for taking the classes and this does not work into a
                lot of the current schedules of kids busy lives.
              </p>
              <ul>
                <li>We offer convenient scheduling six days a week.</li>
                <li>We help nervous drivers and the elderly.</li>
                <li>We offer quality service at reasonable rates.</li>
                <li>We offer the use of the training car for road tests.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="aboutUs-work dflex-all flex-col">
          <div className="aboutUs-work-text flex-col dflex">
            <h2 className="work-heading">How it works</h2>
            <p className="work-text">
              There are only a few easy steps until your traffic ticket is
              dismissed, your driving record is clean and your auto insurances
              rates are safe from increases
            </p>
          </div>
          <div className="aboutUs-img dflex-all">
            <img src="./images/img2.png" alt="" />
          </div>
        </div>

        <div className="aboutUs-statistics dflex-all flex-col">
          <h2 className="stat-heading">our statistics</h2>
          <div className="statistics dflex ">
            <div className="stat-item dflex-all flex-col">
              <div className="stat-log">
                <i className="bi bi-card-checklist "></i>
              </div>
              <h4 className="stat-data">100%</h4>
              <h3>STUDENTS APPROVED</h3>
            </div>
            <div className="stat-item dflex-all flex-col">
              <div className="stat-log">
                <i className="bi bi-emoji-smile"></i>
              </div>
              <h4 className="stat-data">100%</h4>
              <h3>CUSTOMERS SATISFITION</h3>
            </div>
            <div className="stat-item dflex-all flex-col">
              <div className="stat-log">
                <i className="bi bi-stopwatch "></i>
              </div>
              <h4 className="stat-data">3200</h4>
              <h3>HOURS OF LESSONS</h3>
            </div>
            <div className="stat-item dflex-all flex-col">
              <div className="stat-log">
                <i className="bi bi-people "></i>
              </div>
              <h4 className="stat-data">2636</h4>
              <h3>Students</h3>
            </div>
          </div>
        </div>
        <div className="aboutUs-slogan dflex-all flex-col">
            <h1>Start your Engine</h1>
            <p>Choosing Safe Drive Driving School will put you on the road to be a better driver.</p>
            <button className="btn-section2">Book now</button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
