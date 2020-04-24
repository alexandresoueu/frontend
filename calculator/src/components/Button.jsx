import React from 'react'
import './Button.css'

export default props => {
  let styleButtons = 'button '

  styleButtons += props.operation ? 'operation' : ''
  styleButtons += props.double ? 'double' : ''
  styleButtons += props.triple ? 'triple' : ''

  return (
    <button
      onClick={e => props.click && props.click(props.label)}
      className={styleButtons}
    >

      {props.label}
    </button>
  )
}
