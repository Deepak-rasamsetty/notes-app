import "../App.css";
import NavBar from "./NavBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import About from "./About";
import Todo from "./Todo";
import TextUtility from "./TextUtility";
import Home from "./Home";
import React from "react";
import UserRegistration from "./UserRegistration";

function SubApp() {
  console.log('SubApp is rendered');
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="my-4 container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/TextUtil" element={<TextUtility />} />
            <Route path="/register" element={<UserRegistration />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default SubApp;
