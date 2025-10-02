import { Route, Routes } from 'react-router-dom'
import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import { useState } from 'react'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        {/* <Route path='/play/:text' element={<PlayGame currentWord={currentWord} />} /> */}
      </Routes>
    </>
  )
}

export default App 