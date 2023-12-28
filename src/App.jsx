import { useState } from 'react'
import './App.css'
import { TopBoard } from './Components/TopBoard'
import { MaineBoard }  from './Components/MaineBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBoard>
    </TopBoard>
    <MaineBoard></MaineBoard>
    <div className="motivation">Daily Motivation here</div>
    </>
  )
}

export default App
