import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick(e) {
    e.preventDefault();
    addTodo(value);
    setValue("")
  }
  return (
    <form>
      <h2>Add todo</h2>
      <div className="addTodo">
        <input
          type="text"
          onChange={handleChange}
          name="todo"
          placeholder="todo"
          value={value}
        />
        <button type="submit" className="button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
