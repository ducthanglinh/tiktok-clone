import { SET_TODO, ADD_TODO } from "./constants";

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
      console.log(todos);
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
      };
  }
}

export { initState };
export default reducer;
