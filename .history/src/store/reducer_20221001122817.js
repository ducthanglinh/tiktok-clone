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
        todos: [...todos, todoInput],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoInput: action.payload,
      };
  }
}

export { initState };
export default reducer;
