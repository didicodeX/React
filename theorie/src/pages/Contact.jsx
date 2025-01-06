import React, { useReducer, useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import todoReducer from "../reducers/todoReducer";

const Contact = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "primary",
    todoList: [],
  });

  function addTodo(content) {
    dispatch({
      type: "ADD_TODO",
      content
    })
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      id
    })
  }

  function toggleTodoDone(id) {
    dispatch({
      type: "TOGGLE_TODO_DONE",
      id
    })
  }
  
  function toggleTodoEdit(id) {
    dispatch({
      type: "TOGGLE_TODO_EDIT",
      id
    })
  }

  function editTodo(id, content) {
    dispatch({
      type: "EDIT_TODO",
      id,
      content
    })
  }

  function selectTodo(id) {
    dispatch({
      type: "SELECT_TODO",
      id
    })
  }

  function handleChange(e){
    dispatch({
      type: "SET_THEME",
      name: e.target.value
    })
  }

  return (
    <div>
      <h1>Todo list</h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList
        todoList={state.todoList}
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
