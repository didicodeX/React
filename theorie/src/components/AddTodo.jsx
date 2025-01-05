import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;
  }
  return (
    <div>
      <h2>Add todo</h2>
      <div className="addTodo">
        <input
          type="text"
          onChange={handleChange}
          name="todo"
          placeholder="todo"
        />
        <button className="button">Submit</button>
      </div>
    </div>
  );
};

export default AddTodo;
