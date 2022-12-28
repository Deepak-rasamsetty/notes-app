import React from "react";

export default function JiraListElement(props) {
  const displayJiraDetailsOnRight = () => {
    props.displayJiraDetailsComponent(props.jira);
  };
  return (
    <li key={props.jira.id} className="list-group-item">
      <div style={{ float: "left"}}>
       {props.jira.title} - {props.jira.description}
      </div>
      <div   style={{ float: "right" }}>
      <button className="btn btn-light">{props.jira.points}</button>
        <button
          className="btn btn-light"
         onClick={displayJiraDetailsOnRight}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </li>
  );
}
