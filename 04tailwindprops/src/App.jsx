import { useState } from 'react' 
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Hello Tailwind</h1>
      <Card imageUrl="https://images.pexels.com/photos/33801362/pexels-photo-33801362.jpeg?_gl=1*1fw8jcf*_ga*MTYxNzA2NzE3NS4xNzU3ODg0NTQw*_ga_8JE65Q40S6*czE3NTc4ODQ1NDAkbzEkZzEkdDE3NTc4ODQ1NzkkajIxJGwwJGgw" />
      <Card imageUrl="https://images.pexels.com/photos/30641009/pexels-photo-30641009.jpeg" />
    </>
  )
}

export default App
