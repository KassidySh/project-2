import React from 'react'
import './Footer.css';
import Next from './Next'
import Previous from './Previous'

function Footer() {
    return(
        <footer>
            <Previous/>
            <p>Page = 1</p>
            <Next/>

        </footer>
    )
}

export default Footer