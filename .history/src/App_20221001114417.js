import { useContext } from "react";
import { StoreContext } from "./store";
function App() {
  const [state, dispatch] = useContext(StoreContext);
  console.log(state);
  return (
    <div style={{ padding: 20 }}>
      <h1>Hi anh em !!</h1>
    </div>
  );
}

export default App;
