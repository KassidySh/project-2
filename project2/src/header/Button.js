import React, { useState } from 'react'
import Heros from './Heros'
import './Nav.css';

function Button(props) {
    // console.log(props.search)

    // const [info, setInfo] = ({
    //     res: {}
    // })

    function clickSearch(e) {
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
        console.log(data)
    // //    if(!data==null)
    // //     return(
    // //         <Heros
    // //         data={data.data}
    // //    />)
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