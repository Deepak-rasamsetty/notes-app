import React from "react";
import Comment from "./Comment";

export default function NoteDetails(props) {
  return (
    <div className="card" style={{ width: "auto" }}>
      <div className="card-body">
        <p className="card-title">Created on : {props.createdOn}</p>
        <p className="card-title">Comments : {props.createdOn}</p>
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
