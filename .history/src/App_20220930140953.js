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
const addJob = (payLoad) => {
  return {
    type: ADD_JOB,
    payLoad,
  };
};
const deleteJob = (payLoad) => {
  return {
    type: DELETE_JOB,
    payLoad,
  };
};

const reducer = (state, action) => {
  let newState;
  switch (action) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payLoad,
      };
  }
};
function App() {
  const [job, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: 20 }}>
      <h3>TODO</h3>
      <input
        value={job}
        placeholder="Enter TODO"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      ></input>
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
