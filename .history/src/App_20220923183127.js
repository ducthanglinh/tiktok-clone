import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button>increase</button>
    </div>
  );
}

export default App;
