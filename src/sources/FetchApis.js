export async function fetchNotes(func) {
  await fetch("http://localhost:8080/todo/getNotesForUser/2", {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  }).then((response)=>{
    if(response.status!==200){
      throw response.json();
    }else{
      return response
    }
  })
    .then(
      (response) => response.json()
    )
    .then((data) => {
      func(data);
     
    }).catch(
      (error) => {
        func(null);
      })
}

export const fetchPendingNotesCount = async (func) => {
  await fetch("http://localhost:8080/todo/getPendingCountForUser/2", {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => func(data));
};

export const toggleNoteStatus = (noteId, status, setStatus) => {
  fetch(`http://localhost:8080/todo/updateStatus/${noteId}/${status}`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  }).then(setStatus(status));
};

export async function addNewNote(request) {

  await fetch("http://localhost:8080/todo/add", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
}

export const deleteNoteApi = async (noteId) => {

  await fetch(`http://localhost:8080/todo/${noteId}`, {
    method: "DELETE",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
};

export const fetchRegisterUser = async(request)=>{
  await fetch('http://localhost:8081/user/register', {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },body: JSON.stringify(request),
  }).then(response=>console.log(response))
}

export const createJiraApi = async(request)=>{
  await fetch('http://localhost:8082/jira/', {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },body: JSON.stringify(request),
  }).then(response=>console.log(response))
}

export const updateJiraApi = async(request)=>{
  await fetch('http://localhost:8082/jira/', {
    method: "PUT",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },body: JSON.stringify(request),
  }).then(response=>console.log(response))
}

export const fetchAllJira = async (func) => {
  await fetch("http://localhost:8082/jira", {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => func(data));
};

