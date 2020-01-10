import React from 'react'
import './Footer.css';
import Next from './Next'
import Previous from './Previous'

function Footer(props) {


    let current = props.page + 1
    if (props.page !== 0) {
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
    return (
        <footer>
            <p>Page  {current}</p>
            <Next
                nextPage={props.nextPage}
            />
        </footer >
    )
}

export default Footer