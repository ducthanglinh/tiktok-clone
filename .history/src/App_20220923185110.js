import { useState } from "react";
function App() {
  const [curInfo, setInfo] = useState({ name: "Nguyen van A", age: 12 });
  const handleIncrease = () => {
    setInfo({
      ...info,
      bio: "Yeu mau hong",
    });
    console.log(info);
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{info.name}</h1>
      <h1>{info.age}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
