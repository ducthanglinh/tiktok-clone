import { useReducer, useState } from "react";
import Content from "./Content";

function App() {
  const [count, dispath] = useReducer(reducer, initState);
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
