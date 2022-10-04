import { useState } from "react";
import Content from "./Content";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div style={{ padding: 20 }}>
      <button>Toggle Theme</button>
      <Content />
    </div>
  );
}

export default App;
