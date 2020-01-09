import React from 'react'
import './Footer.css';

function Previous(props) {

    return (
        <button onClick={
            () => props.lastPage()}
        // {props.page != 0 ? }
            className='previous' > Previous </button>
    )
}

export default Previous