import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

const TodoList = ({
  todoList,
  deleteTodo,
  toggleTodoDone,
  toggleTodoEdit,
  editTodo,
  selectTodo,
  message
}) => {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            editTodo={(content) => editTodo(todo.id, content)}
            cancelTodo={() => toggleTodoEdit(todo.id)}
          />
        ) : (
          <TodoItem
            key={todo.id} 
            todo={todo}
            deleteTodo={deleteTodo} //1ere methode
            toggleTodoDone={() => toggleTodoDone(todo.id)} //2ieme methode
            toggleTodoEdit={(e) => toggleTodoEdit(e, todo.id)}
            selectTodo={() => selectTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>{message}</p>
  );
};

export default TodoList;
