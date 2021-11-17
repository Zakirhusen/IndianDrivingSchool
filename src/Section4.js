import React from "react";
const dataArray = [
  {
    heading: "BEST SERVICE",
    description: "Provides the best service to be expert in driving",
    imgSrc: "./images/icon-prize.png",
  },
  {
    heading: "BEST TIME TRAINING",
    description:
      "You can choose your team on weekdays after work or on weekends",
    imgSrc: "./images/icon-time.png",
  },
  {
    heading: "WE TRAIN ALL AGES",
    description: "we take into account the age of individual moments.",
    imgSrc: "./images/icon-students.png",
  },
  {
    heading: "INDIVIDUAL APPROACH",
    description: "To everyone we have our own approach.",
    imgSrc: "./images/icon-goal.png",
  },
  {
    heading: "Experienced INSTRUCTOR",
    description:
      "All our Instructors are DMV Licensed, mentally and physically fit and have decade or more of Instruction History.",
    imgSrc: "./images/icon-gear.png",
  },
  {
    heading: "DUPLICATE PEDALS",
    description:
      "Cars equipped with duplicate pedals - our instructor always insures you.",
    imgSrc: "./images/icon-brake.png",
  },
  {
    heading: "ALL DOCUMENTS",
    description:
      "The full package of documents at the end - you get all the documents at the end of",
    imgSrc: "./images/icon-documents.png",
  },
  {
    heading: "Easy payment",
    description:
      "We allow you to decide when and how you want to pay. We accept all major forms of payments.",
    imgSrc: "./images/icon-cash.png",
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