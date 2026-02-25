import { useState } from 'react'
import './App.css'
import Splash from './pages/onboarding/Splash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Splash />
  )
}

export default App
