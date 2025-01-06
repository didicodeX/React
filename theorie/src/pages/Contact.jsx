import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Contact = () => {
  const [todoList, setTodoList] = useState([]);
  const [message, setMessage] = useState("Veuillez entrez une tache");

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
      selected: false,
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
  function toggleTodoEdit(e, id) {
    e.stopPropagation();
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

  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: false,
              content,
            }
          : todo
      )
    );
  }

  function selectTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              selected: true,
            }
          : {
              ...todo,
              selected: false,
            }
      )
    );
  }

  return (
    <div>
      <h1>Todo list</h1>
      <AddTodo addTodo={addTodo} message={message} />
      <TodoList
        message={message}
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleTodoDone={toggleTodoDone}
        toggleTodoEdit={toggleTodoEdit}
        editTodo={editTodo}
        selectTodo={selectTodo}
      />
    </div>
  );
};

export default Contact;
