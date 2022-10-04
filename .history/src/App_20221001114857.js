import { useStore } from "./store";
function App() {
  const [state, dispatch] = useContext(StoreContext);
  const { todos, todoInput } = state;
  return (
    <div style={{ padding: 20 }}>
      <h1>Hi anh em !!</h1>
      <input value={to} />
    </div>
  );
}

export default App;
