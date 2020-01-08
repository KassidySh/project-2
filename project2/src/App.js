import React, { useState, useEffect } from 'react'
import Main from './main/Main'
import Nav from './header/Nav'
import Footer from './footer/Footer'
import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Link, Route, Switch, } from 'react-router-dom'
// import { render } from '@testing-library/react';
// import Hero from './main/display/Hero';
// import DisplayHero from './main/DisplayHero';



function App() {
  //start of loop

  const [ind, setInd] = useState({
    id: 1
  })


// function Display (){
//   if {ind.id}
//   return (
//     <h1>{end}</h1>
//   )
// }

console.log('this is index ', ind.id)

  return (
    <div>
      <Nav />
      {Display()}
      <Main />
      <Footer/>
    </div>

  )
}

export default App;
