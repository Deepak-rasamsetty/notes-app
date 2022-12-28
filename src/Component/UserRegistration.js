import React from "react";
import { useRef } from "react";
import { fetchRegisterUser } from "../sources/FetchApis";
export default function UserRegistration() {

  var firstName = useRef('');

  var lastname = useRef('');
  var email = useRef('');
  var password = useRef('');
  var mobileNumber = useRef('');
  const handleSubmit=() =>{
    var request={
      "firstName": firstName.current.value,
      "lastName": lastname.current.value,
      "email": email.current.value,
      "password": password.current.value,
      "mobileNumber": mobileNumber.current.value
    }
    fetchRegisterUser(request);

  }
  return (
    <div className=" d-flux justify-content-center ">
  
      <div className="col d-flux justify-content-center col-md-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            ref={firstName}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Last Name
          </label>
          <input
            type="email"
            ref={lastname}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            ref={email}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="text"
            ref={password}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            ref={mobileNumber}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>

      <div className=" my-3 d-flux justify-content-center   col">
        <button className="btn btn-primary" type="button" onClick={handleSubmit}>
         Register
        </button>
      </div>
    </div>
  );
}
