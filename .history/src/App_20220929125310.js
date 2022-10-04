import { useState } from "react";
import Content from "./Content";
function App() {
  const [count, setCount] = useState(60);
  const handleStart = () => {};
  const handleStop = () => {};
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
