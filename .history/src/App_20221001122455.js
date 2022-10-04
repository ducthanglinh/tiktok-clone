import { actions, useStore } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  return (
    <div style={{ padding: 20 }}>
      <h1>Hi anh em !!</h1>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodo(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
