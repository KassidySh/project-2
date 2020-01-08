import React, { useState, useEffect } from 'react'
import Heros from './Heros'

import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route, Switch, } from 'react-router-dom'
import { render } from '@testing-library/react';
import Hero from './display/Hero';
import DisplayHero from './DisplayHero';

function Main(props) {



  const [img, setImg] = useState({
    imgURL: ''
  })

  const [superBeing, setSuperBeing] = useState({
    person: null
  })





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
      
      {/* <Link 
      to exact='/'> HOME
      
      </Link> */}

      <DisplayHero
        superBeing={superBeing}
        imgUrl={img}

      />

      {/* <div>
        <Router>
        <Switch>
         <Route exact path='/' component={App} />
         <Route path='/Hero/:name'
         render. 
         />
         </Switch> 
        </Router> */}
        {/* <Hero 
        superBeing={superBeing}
        imgUrl={img}
        /> */}
      </div>


    // </div>
  )
}

export default Main;
