import React, { useState, useEffect } from 'react'
import Heros from './main/Heros'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import { render } from '@testing-library/react';
import Hero from './main/Hero';
import DisplayHero from './main/DisplayHero';

function App() {

const {name, setName} = useState({
  name: ''
})

const [img, setImg] = useState({
  imgURL: ''
})

const [superBeing, setSuperBeing] = useState({
  person: null
})

const [url, setUrl] = useState({
  url: null
})

const [ind, setInd] = useState({
  id: 1
})

useEffect(() => {
  fetch('https://www.superheroapi.com/api.php/3224575430950372/1/')
      .then(response => response.json())
      .then(data => {
        State(data)    
      }
      )
      .catch(err => {
        console.error({err})
      })
    }, []) 

function State (data) {
  setSuperBeing(data)
  setImg(data.image.url)
  setName(data.name) 
}

  return (
    <div className="App">
      <Link to ='/'> HOME</Link>
      <h1>APP IS UP</h1>
      <Heros 
      superBeing = {superBeing}
      imgUrl = {img}
      id = {ind} 
      // url = {url}
      />  

      <div>
      <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <DisplayHero />
          </Route>
          <Route path="/Hero">
            <Dashboard />
          </Route>
          </Switch>


        {/* <Route exact path ='/Super/:name' render={App}/>
        <Route path='/Super/:name' render={Hero} /> */}
      </div>


    </div>
  );
}

export default App;
