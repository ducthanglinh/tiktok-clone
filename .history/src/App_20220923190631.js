import { useState } from "react";

const gifts = ["CPU", "Card", "Mouse"];
function App() {
  const [gift, randomGift] = useState();

  const handle = () => {
    const random = Math.floor(Math.random() * gifts.length);
    return (gift = randomGift(gifts[random]));
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1> {gift || "Chua co phan thuong"}</h1>
      <button onClick={handle}>Lay thuong</button>
    </div>
  );
}

export default App;
