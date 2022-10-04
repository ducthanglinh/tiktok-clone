import { useMemo, useState } from "react";
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
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>

      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
}

export default App;
