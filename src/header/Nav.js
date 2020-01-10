import React from 'react'
import Home from './Home'
import Form from './Form'
import './Nav.css';

function Nav(props) {

    return (
        <header>
            <nav>
                <Home
                    setHome={props.setHome}
                />
                <Form
                    setList={props.setList}
                />
            </nav>
        </header>
    )
}

export default Nav