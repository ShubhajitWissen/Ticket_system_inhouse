import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
//import Tickets from './Body.jsx'
import Login from './Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login />
    </>
  )
}

export default App
