import { useState } from "react";
import Content from "./Content";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleTheme}>Toggle Theme</button>
      <Content theme={theme} />
    </div>
  );
}

export default App;
