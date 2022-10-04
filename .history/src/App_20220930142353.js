import { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
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
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payLoad,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payLoad],
      };
      break;
    default:
      throw new Error("Invalid Action");
  }
  console.log(newState);
  return newState;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: 20 }}>
      <h3>TODO</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter TODO"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      ></input>
      <button onClick={handleSubmit}>ADD</button>
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
