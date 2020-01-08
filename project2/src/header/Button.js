import React from 'react'
import Heros from '../main/Heros.js'
import './Nav.css';

function Button(props) {
    // console.log(props.search)

function clickSearch(e){
    fetch(`https://www.superheroapi.com/api.php/3224575430950372/search/${props.search}`)
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
    return(
        <Heros
        results={data}
    />)
  }




    return(
        <button 
        onClick={clickSearch}
        className='submit'>submit</button>
    )
}

export default Button