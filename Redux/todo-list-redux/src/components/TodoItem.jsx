import { useDispatch } from "react-redux";
import { removeTodoActionCreator, toggleTodoActionCreator } from "../redux/actions/todoActions";

function TodoItem({ id, text, isCompleted }) {
  const dispatch = useDispatch();

  function removeTodo() {
    dispatch(removeTodoActionCreator(id));
  }

  function toggleTodo() {
    dispatch(toggleTodoActionCreator(id));
  }

  return (
  <div className="todo-item">
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={toggleTodo}
      className="todo-checkbox"
    />
    <p className={`todo-text ${isCompleted ? "completed" : ""}`}>{text}</p>
    <button onClick={removeTodo} className="todo-delete-btn">
      ×
    </button>
  </div>
);

}

export default TodoItem;
