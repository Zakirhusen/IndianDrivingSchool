import React from "react";
import icon1 from "./images/icon-prize.png";
import icon2 from "./images/icon-time.png";
import icon3 from "./images/icon-students.png" ;
import icon4 from "./images/icon-goal.png";
import icon5 from "./images/icon-gear.png";
import icon6 from "./images/icon-brake.png";
import icon7 from "./images/icon-documents.png";
import icon8 from "./images/icon-cash.png";

const dataArray = [
  {
    heading: "BEST SERVICE",
    description: "Provides the best service to be expert in driving",
    imgSrc: icon1,
  },
  {
    heading: "BEST TIME TRAINING",
    description:
      "You can choose your team on weekdays after work or on weekends",
    imgSrc: icon2
  },
  {
    heading: "WE TRAIN ALL AGES",
    description: "we take into account the age of individual moments.",
    imgSrc: icon3,
  },
  {
    heading: "INDIVIDUAL APPROACH",
    description: "To everyone we have our own approach.",
    imgSrc: icon4,
  },
  {
    heading: "Experienced INSTRUCTOR",
    description:
      "All our Instructors are DMV Licensed, mentally and physically fit and have decade or more of Instruction History.",
    imgSrc: icon5,
  },
  {
    heading: "DUPLICATE PEDALS",
    description:
      "Cars equipped with duplicate pedals - our instructor always insures you.",
    imgSrc: icon6,
  },
  {
    heading: "ALL DOCUMENTS",
    description:
      "The full package of documents at the end - you get all the documents at the end of",
    imgSrc: icon7,
  },
  {
    heading: "Easy payment",
    description:
      "We allow you to decide when and how you want to pay. We accept all major forms of payments.",
    imgSrc: icon8,
  },
];
const Section4 = () => {
  return (
    <>
    
      <h1 className='dflex-all section4-heading'>Why Choose Us?</h1>
      <div className="section4-container dflex">
        {dataArray.map((dataItem) => {
          const { heading, description, imgSrc } = dataItem;
          return (
            <div className="item dflex" key={imgSrc}>
              <div className="icon">
                <img src={imgSrc} alt="" />
              </div>
              <h3>{heading}</h3>
              <div className="description">{description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Section4;