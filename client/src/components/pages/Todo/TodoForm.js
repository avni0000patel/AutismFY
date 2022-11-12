import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const styles = {
    add__todo__button: {
      color: 'white',
      background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%) ',
    }
  }
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
    <form className="todo-form flex-row justify-center justify-space-between-md align-center" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <div className="col-12 col-lg-9">
            <input
              type="text"
              placeholder="Update your item"
              value={input}
              name="text"
              className="form-input w-100"
              style={{ lineHeight: '1.5', resize: 'vertical', border: '2px solid #5d0cff', }}
              onChange={handleChange}
              ref={inputRef}
            />
          </div>
          <div className="col-12 col-lg-3">
            <button className="add__todo__button btn btn-block py-3" style={styles.add__todo__button} type="submit">
              Update todo
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="col-12 col-lg-9">
            <input
              type="text"
              placeholder="Enter todo..."
              value={input}
              name="text"
              className="form-input w-100"
              style={{ lineHeight: '1.5', resize: 'vertical', border: '2px solid #5d0cff', }}
              onChange={handleChange}
              ref={inputRef}
            />
          </div>
          <div className="col-12 col-lg-3">
            <button className="add__todo__button btn btn-block py-3" style={styles.add__todo__button} type="submit">
              Add Todo
            </button>
          </div>
        </>
      )
      }
    </form >
  );
}

export default TodoForm;
