import React, { useState, useEffect } from 'react'
import Hero from './display/Hero'

import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route, Switch, } from 'react-router-dom'
import { render } from '@testing-library/react';
// import Hero from './display/Hero';
import DisplayHero from './DisplayHero';
import Example from './example'
import App from '../App'

function Main(props) {


  const [img, setImg] = useState({
    imgURL: ''
  })

  const [superBeing, setSuperBeing] = useState({
    person: null
  })

  // const [nam, setNam] = ({
  //   nam: null
  // })

// changeName=(nam)=>{
// setNam()}


  useEffect(() => {
    
    fetch(`https://www.superheroapi.com/api.php/3224575430950372/${props.id}/`)
      .then(response => response.json())
      .then(data => {
        State(data)
      }
      )
      .catch(err => {
        console.error({ err })
      })
  }, [])

  function State(data) {
    setSuperBeing(data)
    setImg(data.image.url)
  }

  return (
    
    <div className="App">

 <Link to='/display/Hero'
    >
      <DisplayHero
        superBeing={superBeing}
        imgUrl={img}
      />
</Link>
      <div>



      </div>
      </div>


    // </div>
  )
}

export default Main;
