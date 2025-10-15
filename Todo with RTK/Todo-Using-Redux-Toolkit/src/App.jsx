import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {


  return (
    <>
      <h1 className='heading'>Todo App Using RTK</h1>
      <TodoInput />
      <TodoList/>
    </>
  )
}

export default App
