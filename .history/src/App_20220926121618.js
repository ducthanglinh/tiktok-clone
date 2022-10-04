import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "PHP",
  },
  {
    id: 3,
    name: "NodeJs",
  },
];
function App() {
  return (
    <div style={{ padding: 30 }}>
      <input />
      <button>Add</button>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
