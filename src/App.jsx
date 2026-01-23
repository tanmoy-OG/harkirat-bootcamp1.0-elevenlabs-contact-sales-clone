import { useState } from 'react'
import './App.css'
import Aside from './components/Aside'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <Aside />
      <Form />
    </div>
  )
}

export default App
