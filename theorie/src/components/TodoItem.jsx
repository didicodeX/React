import React from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodoDone,toggleTodoEdit }) => {
  return (
    <li>
      <span>
        {todo.content} {todo.done && "(✅)"}
      </span>
      <button className="button" onClick={toggleTodoDone}>
        Valider
      </button>
      <button className="button" onClick={toggleTodoEdit} >Modifier</button>
      <button className="button" onClick={() => deleteTodo(todo.id)}>
        Supprimer
      </button>
    </li>
  );
};

export default TodoItem;
