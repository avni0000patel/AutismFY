import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./Todo.css";

function TodoList() {
    
  const [todos, setTodos] =useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div>
            <h1>What is the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
          </div>
        </>
      ) : (
        <p>
          You need to be logged in to write a To-Do list. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      <div className="margin-buttom">For Margin</div>
    </div>
  );
}

export default TodoList;
