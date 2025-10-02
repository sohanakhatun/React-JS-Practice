import { useCallback, useMemo, useState } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((value) => {
    if (value) {
      setTodos((prev) => [...prev, { id: prev.length + value, value }]);
    }
  }, []);

  const deleteTodoByTodoId = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);


  return (
    <>
      <h2>To Do List</h2>
      <TodoInput onSubmit={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodoByTodoId} />
    </>
  )
}

export default App
