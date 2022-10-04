import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      throw new Error(" Invalid Action");
  }
}

export { initState };
export default reducer;
