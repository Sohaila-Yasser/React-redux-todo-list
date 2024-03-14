import { connect } from "react-redux";
import { removeTodo, completeTodo, addTodo } from "../Redux/actions";
import { useState, useEffect } from "react";
import "./Todo.css";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todos, addTodo, removeTodo, completeTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    addTodo(inputValue);
    setInputValue("");
  };

  const getFormattedDate = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="todo">
      <p className="date">
        <b>{getFormattedDate()}</b>
      </p>
      <img
        src="https://github.com/AhmadNasrHosna/simple-react-todo-list-app/blob/master/src/assets/images/illustration.jpg?raw=true"
        alt="todo"
      />
      <h3>Todo list</h3>
      <input
        placeholder="Enter a task..."
        value={inputValue}
        onChange={handleChange}
        type="text"
      />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span onClick={() => completeTodo(todo.id)} className="todo-text">
              {todo.text}
            </span>
            <span>
              <button onClick={() => removeTodo(todo.id)} className="remove">
                <FaRegTrashAlt />
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} className="add">
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  completeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
