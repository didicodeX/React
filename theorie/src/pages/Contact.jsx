import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Contact = () => {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id != id));
  }

  function toggleTodoDone(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }
  function toggleTodoEdit(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
    console.log(todoList);
    
  }

  return (
    <div>
      <h1>Todo list</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleTodoDone={toggleTodoDone}
        toggleTodoEdit={toggleTodoEdit}
      />
    </div>
  );
};

export default Contact;
