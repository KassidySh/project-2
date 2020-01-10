import React from 'react'
import './Footer.css';
import Next from './Next'
import Previous from './Previous'

function Footer(props) {
    let current = props.page + 1

    return (
        <footer>
            <Previous
                page={props.page}
                lastPage={props.lastPage}
            />
            <p>Page  {current}</p>
            <Next
                nextPage={props.nextPage}
            />

        </footer>
    )
}

export default Footer