import { useMemo, useState } from "react";
import Content from "./Content";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <br />
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
}

export default App;
