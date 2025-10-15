import { useSelector } from 'react-redux'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {

  const todos = useSelector(state => state.todoState.todos);

  return (
    <>
    <p className='heading'>To Do App</p>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App