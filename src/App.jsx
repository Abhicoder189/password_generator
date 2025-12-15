import { useState,useCallback,useEffect } from 'react'


import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const genratePassword = useCallback(()=>{
    let  pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for(let i =0;i<length;i++){
    const char =  Math.floor((Math.random()*str.length)+1)
    pass +=str.charAt(char)
    }
   
    setPassword(pass)
  },[length,numberAllowed,charAllowed])
   const copyPassword =()=>{
      window.navigator.clipboard.writeText(password)
    }
  useEffect(()=>{
    genratePassword()
  },[length,numberAllowed,charAllowed])

  return (
    <div className='flex place-content-center '>
    <div className='outline-2 rounded-full p-10'>
     <h1 className=''>Password Genrator</h1>
     <div className=''>
      <input type="text" name="" className="outline-2 outline-green-700 rounded-md m-5 " value={password}  placeholder='password' readOnly  />
      <button className=''onClick={copyPassword}>Copy</button>

     </div>
      <div className=''>
        <div className=''>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}  />
          <label htmlFor="length">Length: {length}</label>
        </div>
         <div className=''>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} className='cursor-pointer '   />
          <label htmlFor="number">Number</label>

        </div>
        <div className=''>
          <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}   className='cursor-pointer'   />
          <label htmlFor="char">Character</label>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
