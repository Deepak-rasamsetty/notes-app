import React from "react";
import img from "./omg2.jpg";
import { useRef } from "react";

import { GetContextValue } from "./Context";

export default function Home() {
  console.log('Home is renderd=ed');
  var theme = GetContextValue("theme");

  const emailRef = useRef(null);
  const sendEmail = () => {
    fetch("http://localhost:8081/user/sendMail", {
      method: "POST",

      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient: emailRef.current.value,
        msgBody: "Hey! Thank you for checking my page",
        subject: "Message from Turing.",
      }),
    });
  };
  return (
    <div className="container text-center d-flex  justify-content-center ">
      <div
        className="card"
        style={{
          width: "28rem",
          backgroundColor: theme.componenetBackgroundColor,
        }}
      >
        <img
          src={img}
          className="rounded-circle shadow-4-strong mx-auto my-4 d-block"
          alt="display"
          height="200px"
          width="200px"
        />
        <div className="card-body">
          <p className="card-text">
            <strong>
              Hey! Thank you for visiting the page. Do you midn providing your
              email address for me to know you. Thank you
            </strong>
          </p>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            ref={emailRef}
            placeholder="Email adrress please"
            aria-label="default input example"
          ></input>
          <button type="button" className="btn btn-primary" onClick={sendEmail}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
