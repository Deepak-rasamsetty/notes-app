import React, { useState } from "react";
import { toggleNoteStatus } from "../sources/FetchApis";
import { GetContextValue } from "./Context";
import { deleteNoteApi } from "../sources/FetchApis";
export default function Note(props) {
  var theme = GetContextValue("theme");
  let [status, setStatus] = useState(props.note.status);
  var note = props.note.note;
  var setNoteListUpdated =GetContextValue('setNoteListUpdated');
  const toggleStatus = () => {
    if (status === "NEW") {
      toggleNoteStatus(props.note.noteId, "DONE", setStatus);
    } else {
      toggleNoteStatus(props.note.noteId, "NEW", setStatus);
    }
    setNoteListUpdated(true);
  };

  const deleteNote=()=>{
    props.reoladAfterNoteDelete(props.note.noteId, deleteNoteApi)
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: theme.componenetBackgroundColor }}
    >
      <div
        className="card-body"
        style={{
          textDecoration: status === "DONE" ? "line-through" : "none",
        }}
      >
        {note}
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example"
          style={{ float: "right" }}
        >
          <button
            type="button"
            className="btn btn-light"
            onClick={toggleStatus}
          >
            {status === "NEW" ? (
              <i className="bi bi-check-lg"></i>
            ) : (
              <i className="bi bi-arrow-return-left" ></i>
            )}
          </button>
          <button type="button" className="btn btn-light" onClick={deleteNote}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
