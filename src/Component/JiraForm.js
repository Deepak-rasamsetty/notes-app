import React, { useRef, useState } from "react";
import { createJiraApi, updateJiraApi, fetchAllJira } from "../sources/FetchApis";
export default function CreateJira(props) {
  const [isEditable, setIsEditable] = useState(!props.isReadOnly);
  const [title, setTitle] = useState(
    props.jira !== undefined ? props.jira.title : ""
  );
  const [description, setDescription] = useState(
    props.jira !== undefined ? props.jira.description : ""
  );
  const [assignee, setAssignee] = useState(
    props.jira !== undefined ? props.jira.assignee : ""
  );
  const [points, setPoints] = useState(
    props.jira !== undefined ? props.jira.points : ""
  );
  const [status, setStatus] = useState(
    props.jira !== undefined ? props.jira.status : ""
  );

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };
  const handlePointsChange = (event) => {
    setPoints(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const disableProps={
    disabled:props.isReadOnly,
    style: { backgroundColor: "#F3F5F6" }
  }
  const submitJira = async() => {
    var request = {
      title: title,
      description: description,
      assignee: assignee,
      points: points,
      status: status,
      requestor: "SRK",
    };
    await createJiraApi(request);
    await fetchAllJira(props.setJiraList);
  };

  const updateJira= async()=>{
    var request = {
      jiraId: props.jira.id,
      title: title,
      description: description,
      assignee: assignee,
      points: points,
      status: status,
      requestor: "SRK",
    };
    
   await updateJiraApi(request);
    await fetchAllJira(props.setJiraList);
    setIsEditable(false);
  }

  const ChangeComponentToEditable = () => {
    setIsEditable(true);
  };
  return (
    <div className="card ">
      <div className="card-header">
        {props.title}
        {props.isReadOnly ? (
          <div style={{ float: "right" }}>
            <span onClick={ChangeComponentToEditable}>
              <i className="bi bi-pencil"></i>
            </span>
          </div>
        ) : (
          <br />
        )}
      </div>
      <div className="card-body">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Leave a comment here"
            {...(!isEditable
              ? {
                 
                  value: title,
                  ...disableProps
                }
              : { value: title, onChange: handleTitleChange })}
          />
          <label htmlFor="floatingInput">Title</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            rows={5}
            {...(!isEditable
              ? {
                  
                  value: description,
                  ...disableProps
                }
              : { value: description, onChange: handleDescriptionChange })}
          ></textarea>
          <label htmlFor="floatingTextarea2">Description</label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingSelect"
            {...(!isEditable
              ? {
                 
                  value: assignee,
                  ...disableProps
                }
              : { value: assignee, onChange: handleAssigneeChange })}
          />
          <label htmlFor="floatingSelect">Assign to</label>
        </div>

        <div className="input-group mb-3">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Jira title"
              {...(!isEditable
                ? {
                    
                    value: points,
                    ...disableProps
                  }
                : { value: points, onChange: handlePointsChange })}
            />
            <label htmlFor="floatingInput">Points</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Jira title"
              {...(!isEditable
                ? {
                 
                    value: status,
                    ...disableProps
                  }
                : { value: status, onChange: handleStatusChange })}
            />
            <label htmlFor="floatingInput">Status</label>
          </div>
        </div>
        {!isEditable?<br></br>: <div className="card my-3">
          <button className="btn btn-light" type="button" onClick={props.isReadOnly?updateJira:submitJira}>
            submit
          </button>
        </div>}
       
      </div>
    </div>
  );
}
