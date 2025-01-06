import React from "react";

const TodoItem = ({
  todo,
  deleteTodo,
  toggleTodoDone,
  toggleTodoEdit,
  selectTodo,
}) => {
  return (
    <li onClick={selectTodo} className={todo.selected ? "selected" : ""}>
      <span>
        {todo.content} {todo.done && "(✅)"}
      </span>
      <button
        className="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoDone;
        }}
      >
        Valider
      </button>
      <button className="button" onClick={toggleTodoEdit}>
        Modifier
      </button>
      <button
        className="button"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
      >
        Supprimer
      </button>
    </li>
  );
};

export default TodoItem;
