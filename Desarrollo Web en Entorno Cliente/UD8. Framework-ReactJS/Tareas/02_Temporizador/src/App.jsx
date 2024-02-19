import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <p>¿Cuantos segundos vas a contar?</p>
        <input type='number'></input> 
        <button type='submit'>iniciar</button>
      </div>
    </>
  )
}

export default App
