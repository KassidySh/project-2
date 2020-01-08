import React, { Component } from 'react'
import Main from './main/Main'
import Nav from './header/Nav'
import Footer from './footer/Footer'
import './App.css';
import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Link, Route, Switch, } from 'react-router-dom'
// import { render } from '@testing-library/react';
// import Hero from './main/display/Hero';
// import DisplayHero from './main/DisplayHero';



class App extends Component {
 constructor() {
   super()
   this.state ={
    page: 3
   }
 }

nextPage = () => {
  this.setState(prevState => ({
    page: prevState.page + 1
  }))
}

lastPage = () => {
  this.setState(prevState => ({
    page: prevState.page - 1
  }))
}

  render (){
    let page = (this.state.page)*20
    let index = page*1
    let rows = []
    for (let i=0; i<20; i++){
      rows.push(      
      <Main
        key={i}
        id={index}
      />,)
      index=index+1
    }

  return (
    <div>
      <Nav />

      {/* <Main
        id={372}
      /> */}
      <main>
        {rows}
      </main>
      <Footer 
        page={this.state.page}
        nextPage={this.nextPage}
        lastPage={this.lastPage}
      />
    </div>

  )
}}

export default App;
