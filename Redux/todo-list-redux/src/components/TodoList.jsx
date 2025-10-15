import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector(state => state.todoState.todos);

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">Todo List</h2>

      <div className="todo-items-wrapper">
        {todos.length > 0 ? (
          todos.map(todoItem => (
            <TodoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              isCompleted={todoItem.completed}
            />
          ))
        ) : (
          <p className="todo-empty">No todos yet. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
