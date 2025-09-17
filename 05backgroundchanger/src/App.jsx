import { useState } from "react"
import Bar from "./components/Bar"

function App() {
  let [color, setColor] = useState('black')
  console.log(color)

  return (
    <>
      <div className="h-screen w-full flex items-end justify-center pb-5"
      style={{backgroundColor: color}}>
        <Bar setColor={setColor} />
      </div>
    </>
  )
}

export default App
