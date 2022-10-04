import { actions, useStore } from "./store";
import { addTodo } from "./store/actions";
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const handleAdd = () => {
    dispatch(addTodo(todoInput));
  };
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

      <button onClick={handleAdd}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
