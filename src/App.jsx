import { useState } from 'react'
import DicePageOne from './components/DicePageOne.jsx'
import DicePageTwo from './components/DicePageTwo.jsx'
import './App.css'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  return (
    <>
     {isGameStarted ? <DicePageTwo /> : <DicePageOne setIsGameStarted= {setIsGameStarted} />}
    </>
  )
}

export default App
