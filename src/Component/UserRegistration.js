import React from "react";
import Gallery from "./Gallery";
import Home from "./Home";

export default function UserRegistration() {
  return (
   <div className="row">
<div className="col mx-2">
<Gallery/>
</div>
<div className="d-flux justify-content-center col-md-4">
     <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
    </div>
   </div>
  );
}
