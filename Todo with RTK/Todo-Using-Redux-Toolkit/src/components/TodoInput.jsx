import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

function TodoInput() {
  const dispatch = useDispatch(); // this dispatch function is already connected to the store

  const [todo, setTodo] = useState("");

  function addTodoToStore() {
    dispatch(addTodo(todo));
    setTodo("");
  }

  return (
    <div className="todo-container">
      <div className="todo-input-wrapper">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter a todo..."
          className="todo-input"
        />
        <button onClick={addTodoToStore} className="todo-button">
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
