import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Pneu from './pages/Pneus'
function App() {
 
  return (
    <div className="app">
      <Pneu />
      <Demo />
      <Home />
    </div>
  )
}

export default App
