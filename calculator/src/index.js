import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Calculator from './main/Calculator'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister()
