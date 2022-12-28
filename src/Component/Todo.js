import React, { useEffect, useRef, useState } from "react";
import Note from "./Note";
import { GetContextValue } from "./Context";
import { addNewNote, fetchNotes } from "../sources/FetchApis";
import AddTask from "./AddTask";
export default function Todo() {

  var theme = GetContextValue("theme");
  var mode = GetContextValue("mode");
  var setNoteListUpdated =GetContextValue('setNoteListUpdated');
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

async function updateNewNoteAndReload(newNote){
  console.log('Todo, in updateNewNoteAndReload');
  var request={
    "userId":"2",
    "note": newNote
}
  await addNewNote(request);
  await fetchNotes(setNotes);
  setNoteListUpdated(true);

}

async function reoladAfterNoteDelete(noteId,deleteNoteFunc){
  await deleteNoteFunc(noteId);
  await fetchNotes(setNotes);
  setNoteListUpdated(true);

}
console.log('Todo Rendered, notes - '+notes);
  return (
    <div>
      <div
        className="card"
        style={{
          backgroundColor: theme.componentHeaderBackgroundColor,
          color: theme.textColor,
          fontSize: "23px",
        }}
      >
        <h1 className="card-title text-center">
          <span className="justify-content-center d-flex my-3 position-relative ">
            Things to get done
          </span>
        </h1>


        {notes!==null? notes.map((note) => {
          return <Note key={note.noteId} note={note} mode={mode} reoladAfterNoteDelete={reoladAfterNoteDelete}/>;
        }):
        <div
        className="card  text-center"  style={{
          backgroundColor: theme.componenetBackgroundColor,
          color: theme.textColor,
          fontSize: "23px",
        }}> <p> No tasks found</p></div>}
      </div>
 <AddTask addNote={updateNewNoteAndReload}/>

    </div>
  );
}
