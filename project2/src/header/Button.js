import React from 'react'
import './Nav.css';

function Button(props) {


    function clickSearch(e) {
        //search string
        fetch(`https://www.superheroapi.com/api.php/3224575430950372/search/${props.search}/`)
            .then(response => response.json())
            .then(data => {
                display(data)
            }
            )
            .catch(err => {
                console.error({ err })
            })
    }

    function display(data) {
        let list = []
        let res = (data.results)
        //collection of matching ids
        let searchList = res.map(item => {
            //convert string# to integer
            let int = parseInt(item.id)
            list.push(int)

        })
        //setlist to state
        props.setList(list)

    }


    return (
        <div>
            <button
                onClick={clickSearch}
                className='submit'>submit</button>

        </div>
    )
}

export default Button