import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  
  const [ counter, setCounter ] = useState(0)

  return (
  <div className="App">
    <h1>this is counter app</h1>
    <div id="counter-value">{ counter }</div>
    <button id="btn-increment" onClick={ () => setCounter(counter +1)}>Increment</button>
    <button id="btn-decrement" onClick={ () => setCounter(counter -1)}>Decrement</button>
  </div>
  )
}

export default App
