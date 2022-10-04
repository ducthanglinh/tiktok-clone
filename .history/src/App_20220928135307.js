import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(false);
  return <div style={{ padding: 20 }}>{show && <Content />}</div>;
}

export default App;
