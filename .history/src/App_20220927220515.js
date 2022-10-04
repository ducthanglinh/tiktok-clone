import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState("");
  return (
    <div style={{ padding: 20 }}>
      <button>Toggle</button>
      {show || <Content />}
    </div>
  );
}

export default App;
