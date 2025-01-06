import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todoList}) => {
  return todoList.length ? (
    <ul>
      {todoList.map(todo => <TodoItem todo={todo}/>)}
    </ul>
  ) : <p>Veuillerz entree une tache</p>;
};

export default TodoList;