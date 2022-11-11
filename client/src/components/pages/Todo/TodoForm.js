import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <h3>Want to create a To-Do List for Today?</h3>

      {Auth.loggedIn() ? (
        <>
          <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
              <>
                <input
                  type="text"
                  placeholder="Update your item"
                  value={input}
                  name="text"
                  className="todo-input"
                  onChange={handleChange}
                  ref={inputRef}
                />
                <button className="todo-button">Update</button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Add a todo"
                  value={input}
                  name="text"
                  className="todo-input"
                  onChange={handleChange}
                  ref={inputRef}
                />
                <button className="todo-button">Add todo</button>
              </>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to create a To-Do List. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

export default TodoForm;
