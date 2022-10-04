import { useState } from "react";
function App() {
  const [curInfo, setInfo] = useState({ name: "Nguyen van A", age: 12 });
  const handleIncrease = () => {
    setInfo({
      ...curInfo,
      bio: "Yeu mau hong",
    });
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{curInfo.bio}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
