import React, { useState } from "react";

const EditTodo = ({ todo, saveTodo, cancelTodo }) => {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick(e) {
    e.preventDefault();
    saveTodo(value);
    setValue("");
  }
  return (
    <form>
      <h2>Add todo</h2>
      <div className="addTodo">
        <input
          type="text"
          onChange={handleChange}
          name="editedtodo"
          placeholder="edited todo"
          value={todo.content}
        />
        <button type="submit" className="button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
