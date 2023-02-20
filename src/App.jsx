import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
