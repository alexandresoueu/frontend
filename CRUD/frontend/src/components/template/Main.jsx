import React, {Fragment} from 'react'
import Header from './Header'
import './Main'

export default props => 
    <Fragment>
        <Header {...props} />
        <main className="content">
            Content
        </main>
    </Fragment>
