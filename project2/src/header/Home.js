import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom'

function Home() {
    return (

        <Link to exact='/'>
            <img className='home' src='https://images.unsplash.com/photo-1514329926535-7f6dbfbfb114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='Home' />
        </Link>
    )
}

export default Home