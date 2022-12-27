import React, { useState } from "react";
import { camelize } from "./Utils";

export default function TextUtility() {
  let [responseText, setResponseText] = useState("");
  var text="";
const handleToUpperCaseConversion=()=>{
    setResponseText(text.toUpperCase());
}
const handleToLowerCaseConversion=()=>{
    setResponseText(text.toLowerCase());
}
const handleToCamelCaseConversion=()=>{
    setResponseText(camelize(text));
}


const handleOnTextChange=(event)=>{
text=event.target.value;
}
console.log(responseText);
  return (
    <div className="container">
      <div>
        <h2>Enter Text to analyse</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnTextChange}
        ></textarea>
        <div className="row">
          <div className="row-md-3">
            <button type="submit" className="btn btn-primary my-3 mx-2" onClick={handleToUpperCaseConversion}>
              Convert to Upper case
            </button>
            <button type="submit" className="btn btn-primary my-3 mx-2" onClick={handleToLowerCaseConversion}>
              Convert to Lower case
            </button>
            <button type="submit" className="btn btn-primary my-3 mx-2"  onClick={handleToCamelCaseConversion}>
              Convert to Camel case
            </button>
            <button type="submit" className="btn btn-primary my-3 mx-2">
              Clear text
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Response: </h2>
        <p> {responseText}</p>
      </div>
    </div>
  );
}
