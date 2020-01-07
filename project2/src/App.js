import React, { useState, useEffect } from 'react'
import Heros from './main/Heros'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route, Switch, } from 'react-router-dom'
import { render } from '@testing-library/react';
import Hero from './main/display/Hero';
import DisplayHero from './main/DisplayHero';

function App() {

  const [name, setName] = useState({
    name: ''
  })

  const [img, setImg] = useState({
    imgURL: ''
  })

  const [superBeing, setSuperBeing] = useState({
    person: null
  })

  const [ind, setInd] = useState({
    id: 1
  })




  useEffect(() => {
    fetch(`https://www.superheroapi.com/api.php/3224575430950372/${ind.id}/`)
      .then(response => response.json())
      .then(data => {
        State(data)
      }
      )
      .catch(err => {
        console.error({ err })
      })
  }, [ind])

  function State(data) {
    console.log(data)
    setSuperBeing(data)
    setImg(data.image.url)
    setName(data.name)
  }

  return (
    
    <div className="App">
      
      {/* <Link 
      to exact='/'> HOME
      
      </Link> */}

      <Heros
        superBeing={superBeing}
        imgUrl={img}
        id={ind}
      // url = {url}
      />

      {/* <div>
        // // {/* <Router> */}
        {/* <Switch>
        //         <Route exact path='/' component={App} />
        //         <Route path='/Hero/:name'
        //         // render. 
        //         />
        //     </Switch> */} 
        {/* </Router> */}
        <Hero 
        superBeing={superBeing}
        imgUrl={img}
        />
      </div>


    // </div>
  )
}

export default App;
