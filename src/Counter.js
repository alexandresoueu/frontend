import React, { useState } from 'react'

export default function Counter() {
  
   const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>this is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="btn-increment" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button id="btn-decrement" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  )
}