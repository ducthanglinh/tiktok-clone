import { useReducer, useState } from "react";
import Content from "./Content";

const initState = 0;
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;

    default:
      return new Error("Invalid Action");
  }
};
function App() {
  const [count, dispath] = useReducer(reducer, initState);
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>

      <button onClick={() => dispath(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispath(UP_ACTION)}>Up</button>
    </div>
  );
}

export default App;
