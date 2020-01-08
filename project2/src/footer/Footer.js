import React from 'react'
import './Footer.css';
import Next from './Next'
import Previous from './Previous'

function Footer(props) {

    return(
        <footer>
            <Previous 
                    // lastPage={props.lastPage}
            />
            <p>Page  {props.page}</p>
            <Next
                    nextPage={props.nextPage}
            />

        </footer>
    )
}

export default Footer