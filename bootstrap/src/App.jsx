import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <form>
      <div className='mb3'>
        <label htmlFor='email' className='form-label'>Adres email</label>
        <input type='email' className='form-control' id='email'/>        
      </div>
      <div className='mb3'>
        <label htmlFor='email' className='form-label'>Haslo</label>
        <input type='password' className='form-control' id='password'/>        
      </div>
      <button className='btn btn-primary'>Zaloguj!</button>
     </form>
    </>
  )
}

export default App
