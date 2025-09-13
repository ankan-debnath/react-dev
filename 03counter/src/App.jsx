import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount(count + 1)
    console.log(count)
  }
  function decrement() {
    setCount(Math.max(count - 1, 0))
    console.log(count)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>add value</button>
      <button onClick={decrement}>subtract value</button>
    </>
  )
}

export default App
