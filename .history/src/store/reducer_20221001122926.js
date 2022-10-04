import { SET_TODO } from "./constants";

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
  }
}

export { initState };
export default reducer;
