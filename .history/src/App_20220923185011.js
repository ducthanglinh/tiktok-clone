import { useState } from "react";
function App() {
  const info = {
    name: "Nguyen van A",
    age: 12,
  };
  const [curInfo, setInfo] = useState(info);
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
