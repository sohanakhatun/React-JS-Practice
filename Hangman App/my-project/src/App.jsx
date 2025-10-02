import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import { useState } from 'react'
import Home from './pages/Home'
import { WordContext } from './context/wordContext'

function App() {
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');
  return (
    <WordContext.Provider value={{ wordList, setWordList, word, setWord }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        {/* <Route path='/play/:text' element={<PlayGame currentWord={currentWord} />} /> */}
      </Routes>
    </WordContext.Provider>
  )
}

export default App 