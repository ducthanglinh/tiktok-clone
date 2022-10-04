import { useRef, useState } from "react";
import Content from "./Content";
function App() {
  const [name, setName] = useState("");
  const [price, setPric] = useState("");
  const [product, setProduct] = useState([]);

  const handleSubmit = () => {};
  return (
    <div style={{ padding: 20 }}>
      <input
        value={name}
        placeholder="Enter Name..."
        onChange={() => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter Price..."
        onChange={() => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <h1>Total:</h1>
      <ul></ul>
    </div>
  );
}

export default App;
