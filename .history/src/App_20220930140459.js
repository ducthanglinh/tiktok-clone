import { useReducer, useState } from "react";
import Content from "./Content";

const initState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "sadd_job";
const DELETE_JOB = "delete_job";

const setJob = (payLoad) => {
  return {
    type: SET_JOB,
    payLoad,
  };
};

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h3>TODO</h3>
      <input placeholder="Enter TODO"></input>
      <button>ADD</button>
      <ul>
        <li>Quet nha &times;</li>
        <li>Rua bat &times;</li>
        <li>Lau San &times;</li>
      </ul>
    </div>
  );
}

export default App;
