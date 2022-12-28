import React, { useEffect, useState } from "react";
import { fetchAllJira } from "../sources/FetchApis";
import JiraForm from "./JiraForm";
import JiraListElement from "./JiraListElement";

export default function JiraDashboard() {
  const [jiraList, setJiraList] = useState([]);
  const [rightBoard, setRightBoard] = useState([]);

  const displayCreateJiraComponent = () => {
    setRightBoard(
      <JiraForm
        key="Create Jira"
        title="Create Jira"
        isReadOnly={false}
        setJiraList={setJiraList}
      />
    );
  };

  const displayJiraDetailsComponent = (jira) => {
    setRightBoard(
      <JiraForm
        key="Jira Details"
        title="Jira Details"
        isReadOnly={true}
        jira={jira}
        setJiraList={setJiraList}
      />
    );
  };
  useEffect(() => {
    fetchAllJira(setJiraList);
  }, []);
  return (
    <div className="row container">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Jira Tickets assigned to you</div>
          <div className="card-body">
            <ul className="list-group">
              {jiraList.map((jira) => {
                return (
                  <JiraListElement
                    key={jira.id}
                    jira={jira}
                    displayJiraDetailsComponent={displayJiraDetailsComponent}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="card my-3">
          <button
            className="btn"
            type="button"
            onClick={displayCreateJiraComponent}
          >
            Create New jira
          </button>
        </div>
      </div>
      <div className="col container text-center">{rightBoard}</div>
    </div>
  );
}
