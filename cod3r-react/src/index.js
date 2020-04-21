import React from 'react'
import ReactDOM from 'react-dom'
import Dad from './components/parents/dad'
import FirstSon from './components/sons/firstSon'

ReactDOM.render(
  <div>
    <Dad name="Dave" surname="Grohl" />
    <FirstSon name="Josh" />
    <FirstSon name="Emmy" />
    <FirstSon name="Rebecca" />
  </div>,
  document.getElementById('root')
)
