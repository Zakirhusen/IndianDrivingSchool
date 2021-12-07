import React, { useEffect, useState } from "react";

const Section5 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
    // console.log(width)
  };
  window.addEventListener("resize", updateDimensions);
  // let tableSlide = document.querySelectorAll(".price-table-container");
  // useEffect(() => {
  //   let interval;
  //   let tableSlide = document.querySelectorAll(".price-table-container");
  //   console.log(tableSlide);
  //   let i = 1;
  //   if (width < 750) {
  //     interval = setInterval(() => {
  //       tableSlide.forEach((slide, index) => {
  //         slide.classList.add("inActive");
  //       });
  //       tableSlide[i % 3].classList.remove("inActive");
  //       i++;
  //     }, 3000);
  //   }
  //   }, []);
  //     tableSlide.forEach((element) => {
  //       let animStop = () => {
  //         // console.log("mouse hover");
  //         clearInterval(interval);
  //       };
  //       element.addEventListener("mouseover", animStop);
  //     });

  //     tableSlide.forEach((element) => {
  //       let animStop = () => {
  //       console.log(element);
  //       // clearInterval(interval);
  //       console.log("mouse hover");
  //       element.classList.add("none");
  //     };
  //     let animStart = () => {
  //       console.log(element);
  //       console.log("mouseout");
  //       element.classList.remove("none");
  //       i = 1;
  //       interval = setInterval(() => {
  //         tableSlide.forEach((slide, index) => {
  //           slide.classList.add("inActive");
  //         });
  //         tableSlide[i%3].classList.remove("inActive");
  //         i++;
  //       }, 4000);
  //     };
  //     // element.addEventListener("mouseover", animStop);
  //     // element.addEventListener("mouseout", animStart);
  //   });
  // }
  // }, [width]);
  return (
    <>
      <div className="section5-container dflex ">
        <div className="price-table">
          <h2>price table</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            odit tempora quisquam ipsam quasi consequatur maxime, ipsa dolor
            debitis suscipit doloremque assumenda voluptas, qui autem?
          </p>
        </div>
        <div className="section5-container-wrapper dflex-all justify-content-space-bet ">
          <div
            className={`price-table-container justify-content dflex price-table-container1`}
          >
            <div className="course-name dflex">
              <span className="heading-line"></span>
              <h2>&#8377;2500</h2>
              <span className="heading-line"></span>
            </div>
            <ul className="price-table__feature-list">
              <li className="price-table__feature-item">
                <h3>BASIC PLAN</h3>
              </li>
              <li className="price-table__feature-item">Full course theory</li>
              <li className="price-table__feature-item">Full driving course</li>
              <li className="price-table__feature-item">SMS reminders</li>
              <li className="price-table__feature-item">
                Training in first aid
              </li>
              <li className="price-table__feature-item">Practical sessions</li>
              <li className="price-table__feature-item">-</li>
              <li className="price-table__feature-item">-</li>
              <li className="price-table__feature-item">
                <button className="btn-section2">Send Request</button>
              </li>
            </ul>
          </div>
          <div
            className={`price-table-container justify-content dflex price-table-container2`}
          >
            <p style={{ color: "#fdc400" }}>&#9733; BEST SELLER &#9733;</p>
            <div className="course-name dflex">
              <span className="heading-line"></span>
              <h2>&#8377;4500</h2>
              <span className="heading-line"></span>
            </div>
            <ul className="price-table__feature-list">
              <li className="price-table__feature-item">
                <h3>Popular</h3>
              </li>
              <li className="price-table__feature-item">Full course theory</li>
              <li className="price-table__feature-item">Full driving course</li>
              <li className="price-table__feature-item">
                With driving license
              </li>
              <li className="price-table__feature-item">In traffic training</li>
              <li className="price-table__feature-item">Practical sessions</li>
              <li className="price-table__feature-item">SMS reminders</li>
              <li className="price-table__feature-item">-</li>
              <li className="price-table__feature-item">
                <button className="btn-section2">Send Request</button>
              </li>
            </ul>
          </div>
          <div
            className={`price-table-container justify-content dflex price-table-container3`}
          >
            <div className="course-name dflex">
              <span className="heading-line"></span>
              <h2>&#8377;5500</h2>
              <span className="heading-line"></span>
            </div>
            <ul className="price-table__feature-list">
              <li className="price-table__feature-item">
                <h3>PRO PLAN</h3>
              </li>
              <li className="price-table__feature-item">Full course theory</li>
              <li className="price-table__feature-item">Full driving course</li>
              <li className="price-table__feature-item">
                With driving license
              </li>
              <li className="price-table__feature-item">In traffic training</li>
              <li className="price-table__feature-item">
                Training in first aid
              </li>
              <li className="price-table__feature-item">Practical sessions</li>
              <li className="price-table__feature-item">SMS reminders</li>
              <li className="price-table__feature-item">
                <button className="btn-section2">Send Request</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
