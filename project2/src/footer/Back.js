import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';


function Back() {
    return (
        <Link to='/' >
            <button
                className='back'>Back</button>
        </Link>
    )
}

export default Back