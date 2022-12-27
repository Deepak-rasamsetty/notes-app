import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchNotes, fetchPendingNotesCount } from "../sources/FetchApis";
import { GetContextValue } from "./Context";
import { getPendingTasks } from "./Utils";
import { useState } from "react";
export default function NavBar() {

  var mode = GetContextValue("mode");
  var changeTheme = GetContextValue("changeTheme");
  var toggleAdminAccess = GetContextValue("toggleAdminAccess");
  var setNoteListUpdated =GetContextValue('setNoteListUpdated');
  const [pendingNotesCount, setPendingNotesCount] = useState(0);
  //const [noteUpdatedState, setNoteUpdatedState] = useState(noteListUpdated);

  let changeModeLabel =
    mode === "light" ? (
      <i className="bi bi-moon-fill"></i>
    ) : (
      <i className="bi bi-sun"></i>
    );

    useEffect(()=>{
      console.log('NavBar useEffect');
      setNoteListUpdated(false);
      fetchPendingNotesCount(setPendingNotesCount);
    })
    console.log('NavBar rendered, pendingNotesCount - '+ pendingNotesCount);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Turing.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " to="/todo">
                  Notes
                  <span className=" badge text-bg-danger mx-2">
                    {pendingNotesCount}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/textUtil">
                  Text utility
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/register">
                  Register
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toggleAdminAccess}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Admin access
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={changeTheme}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {changeModeLabel}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
