import { useDispatch } from "react-redux";
import { removeTodo , toggleTodo } from "../redux/slices/todoSlice";

function TodoItem({ id, text, isCompleted }) {
    
    const dispatch = useDispatch();

    function removeTodoItem() {
        dispatch(removeTodo(id));
    }

    function toggleTodoItem() {
        dispatch(toggleTodo(id))
    }

  return (
  <div className="todo-item">
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={toggleTodoItem}
      className="todo-checkbox"
    />
    <p className={`todo-text ${isCompleted ? "completed" : ""}`}>{text}</p>
    <button onClick={removeTodoItem} className="todo-delete-btn">
      ×
    </button>
  </div>
);
}

export default TodoItem;