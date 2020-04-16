import React, { Fragment } from 'react'

export default props =>
  <Fragment>
    <h1>SALVE RAPEIZE!</h1>
    <h2>{props.name}</h2>
  </Fragment>

/**
 * <React.Fragment>
    <h1>SALVE RAPEIZE!</h1>
    <h2>{props.name}</h2>
  </React.Fragment>

  export default props =>[
    <h1>SALVE RAPEIZE!</h1>
    <h2>{props.name}</h2>
  ]

  export default props =>
  <div>
    <h1>SALVE RAPEIZE!</h1>
    <h2>{props.name}</h2>
  </div>
 */