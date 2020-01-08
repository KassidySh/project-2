import React from 'react'
import './Footer.css';

function Next(props) {

    return (
        <button 
         onClick={()=>props.nextPage()}
        className='next'>Next</button>
    )
}

export default Next