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
      break;
    default:
      throw new Error("Invalid Action");
  }
  return newState;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
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
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
