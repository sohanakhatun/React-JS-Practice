import { Route, Routes } from 'react-router-dom'
import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import { useState } from 'react'

function App() {

  // 1. to access the current word in a different page.
  const [currentWord, setCurrentWord] = useState("");
  
  return (
    <>
      <Routes>
        <Route path='/' element={<TextInputFormContainer setCurrentWord={setCurrentWord} />} />
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame currentWord={currentWord} />} />
        {/* <Route path='/play/:text' element={<PlayGame currentWord={currentWord} />} /> */}
      </Routes>
    </>
  )
}

export default App 