import React, { useEffect, useRef } from "react";
import { useState } from "react";
export default function AddTask(props) {
    console.log('Add Task is rendered');
  const [AddNoteClicked, setAddNoteClicked] = useState(false);
  const [newNote, setNewNote] = useState("");
  const handleNewNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNewNote = () => {
    props.addNote(newNote);
    setAddNoteClicked(false);
    setNewNote("");
  };
  const deleteNewNote=()=>{
    setAddNoteClicked(false);
    setNewNote("");
  }
  const toggleAddNoteClicked = () => {
    setAddNoteClicked(!AddNoteClicked);
  };
  return (
    <div>
      <div className="card my-3">
        <button className="btn" type="button" onClick={toggleAddNoteClicked}>
          Add New Task
        </button>
      </div>

      <div
        className={`input-group  ${AddNoteClicked ? "visible" : "invisible"}`}
      >
        <input
          type="text"
          className="form-control"
          placeholder=""
          value={newNote}
          onChange={handleNewNoteChange}
          aria-label="Example text with two button addons"
        />

        <div
          className="btn-group"
          role="group"
          aria-label="Basic example"
          style={{ float: "right" }}
        >
          <button type="button" className="btn btn-light" onClick={addNewNote}>
          <i className="bi bi-check-lg"></i>
          </button>
          <button type="button" className="btn btn-light" onClick={deleteNewNote}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
