import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setNumbers] = useState(false)
  const [includeSpecialCharacters, setSpecialCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  function generatePassword(){
    let passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(includeNumbers) passwordString += "0123456789"
    if(includeSpecialCharacters)  passwordString += "@#$!%^&*.?"
    let password = ""
    for(let i = 0; i < length; i++){
      let pos = Math.floor(Math.random() * passwordString.length)
      password += passwordString.charAt(pos)
    }
    
    setPassword(password)
  }

  function copyPassword(){
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    // document.execCommand('copy') // deprecated
  }

  const copyPasswordToClipboard = useCallback(
    copyPassword, 
    [password]
  ) // useCallback to memoize the function so that it does not get recreated on each render unless dependencies change
  // but here it is not necessary as we are not passing this function to any child component
  
  const passwordGenerator = useCallback(
    generatePassword, 
    [length, includeNumbers, includeSpecialCharacters, setPassword]
  )


  // passwordGenerator() // problem: infinite loop because of state change on each render cycleing to render again and again

  useEffect(() => {
    generatePassword()
  }, [length, includeNumbers, includeSpecialCharacters])

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg p-4
      my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-2xl text-white">Password Generator</h1>

        <div className='flex  rounded-lg mb-4 overflow-hidden'>
          <input 
            type="text" 
            className="outline-none bg-white rounded my-4 p-2 text-xl w-full " 
            value={password}
            readOnly
            ref={passwordRef}/>
          <button 
            className='h-auto my-4 px-3 py-3 outline-none bg-blue-700 text-white rounded'
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>

        <div className='flex items-center mb-4 gap-8'>
          <div className='flex items-center gap-x-2'>
            <input type="range" 
              min={8} 
              max={16} 
              value={length}
              onChange={ (e) => setLength(e.target.value) } 
              className='cursor-pointer'/>
            <label>Length({length})</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input 
              type="checkbox" 
              defaultChecked={includeNumbers}
              id='numberInput'
              onChange={ (e) => setNumbers((prev) => !prev ) }/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input 
              type="checkbox" 
              id='specialCharacterInput'
              defaultChecked={includeSpecialCharacters}
              onChange={ (e) => setSpecialCharacters((prev) => !prev ) }/>
            <label htmlFor='specialCharacterInput'>Special Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
