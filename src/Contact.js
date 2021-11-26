import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
  });
  const [fullDetail, setFullDetail] = useState("");
  let inputHandler = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    console.log(value);
    console.log(inputName);
    // setName(e.target.value);
    setName((preVal) => {
      return {
        ...preVal,
        [inputName]: value,
      };
    });
  };

  let submitHandler = (e) => {
    e.preventDefault();
    console.log("btn clicked");
    setFullDetail(name);
    // setLastNameNew(lastName)
  };
  return (
    <>
      <div className="contact-main dflex-all flex-col">
        <h1>contacts</h1>
        <div className="contact dflex-all">
          <form className="contact-form" onSubmit={submitHandler}>
            <div className="dflex flex-col">
              <h2> Get in Touch</h2>
              <p>
                If you want to ask a question send a message or submit a
                testimonial, please use the online form below.
              </p>
              <input
                value={name.fName}
                onChange={inputHandler}
                type="text"
                placeholder="Enter first name"
                name="fName"
                id=""
              />
              <input
                value={name.email}
                onChange={inputHandler}
                type="email"
                placeholder="Enter your email"
                name="email"
                id=""
              />
              <input
                value={name.number}
                onChange={inputHandler}
                type="number"
                placeholder="Enter your mob no"
                name="number"
                id=""
              />
              <textarea
                name="contact-textarea"
                id=""
                cols="60"
                rows="10"
              ></textarea>
              <button className="btn-section2" type="submit">
                Send message
              </button>
            </div>
          </form>
          <div className="contact-office dflex">
            <div className="contact-address dflex flex-col">
              <h2>Our Office</h2>
              <div className="icon-heading dflex ">
                <i className="bi bi-geo-alt-fill"></i>
                <div className="dflex flex-col icon-sub-heading">
                  <h3>address</h3>
                  <p>Halgeri road devika School </p>
                  <p>cross Ranebennur-581115</p>
                </div>
              </div>
              <div className="icon-heading dflex">
                <i className="bi bi-telephone-outbound"></i>
                <div className="dflex flex-col icon-sub-heading">
                  <h3>phone 24/7</h3>
                  <p>974-199-9828</p>
                </div>
              </div>
              <div className="icon-heading dflex">
                <i className="bi bi-clock"></i>
                <div className="dflex flex-col icon-sub-heading">
                  <h3>operating hours</h3>
                  <p>Mon-Fri: 9:00 am – 5:00 pm</p>
                  <p>Sat-Sun: 11:00 am – 16:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
