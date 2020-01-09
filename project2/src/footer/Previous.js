import React from 'react'
import './Footer.css';

function Previous(props) {

    return ( <
        button onClick = {
            () => props.lastPage() }

        className = 'previous' > Previous < /button>
    )
}

export default Previous