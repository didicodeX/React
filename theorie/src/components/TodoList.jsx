import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

const TodoList = ({ todoList, deleteTodo, toggleTodoDone, toggleTodoEdit }) => {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo} //1ere methode
            toggleTodoDone={() => toggleTodoDone(todo.id)} //2ieme methode
            toggleTodoEdit={() => toggleTodoEdit(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Veuillerz entree une tache</p>
  );
};

export default TodoList;
