function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            content: action.content,
            edit: false,
            done: false,
            selected: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
      };
    }
    case "TOGGLE_TODO_DONE": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id != action.id ? t : { ...t, done: !t.done }
        ),
      };
    }
    case "TOGGLE_TODO_EDIT": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id != action.id ? t : { ...t, done: !t.edit }
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id != action.id ? t : { ...t, content: !t.content }
        ),
      };
    }
    case "SELECT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id != action.id
            ? { ...t, selected: false }
            : { ...t, selected: true }
        ),
      };
    }
    case "SET_THEME": {
      return {
        ...state,
        theme: action.theme,
      };
    }
    default: {
      throw new Error("Action inconnue");
    }
  }

  return state;
}
export default todoReducer;
