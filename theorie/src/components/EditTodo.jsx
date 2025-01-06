import React, { useState } from "react";

const EditTodo = ({ todo, editTodo, cancelTodo }) => {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick(e) {
    e.preventDefault();
    editTodo(value);
    setValue("");
  }
  return (
    <form>
      <div className="addTodo">
        <input
          type="text"
          onChange={handleChange}
          name="editedtodo"
          placeholder="edited todo"
          value={value}
        />
        <button type="button" className="button" onClick={cancelTodo}>
          Annuler
        </button>
        <button type="submit" className="button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
