import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from './components/firstComponent'
import { GoodAfternoon, GoodEvening } from './components/multiple'

ReactDOM.render(
  <div>
    <GoodEvening name="Nemo" />
    <GoodEvening name="Dori" />
    <FirstComponent name="Alexandre"/>
  </div>,
  document.getElementById('root')
)
