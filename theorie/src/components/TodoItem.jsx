import React from "react";

const TodoItem = ({todo}) => {
  return (
    <li>
      <span>{todo.content}</span>
      <button className="button">Valider</button>
      <button className="button">Modifier</button>
      <button className="button">Supprimer</button>
    </li>
  );
};

export default TodoItem;
