import { useState } from "react";

const gifts = ["CPU", "Card", "Mouse"];
function App() {
  const [gift, randomGift] = useState(gifts);

  const handle = () => {
    const random = Math.floor(Math.random() * gifts.length);
    randomGift(gift[random]);
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1> Chua co phan thuong</h1>
      <button onClick={handle}>Lay thuong</button>
    </div>
  );
}

export default App;
