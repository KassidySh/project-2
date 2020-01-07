import React, {setState, useEffect, useState} from 'react'
import Power from './Power.js'
import Friends from './Friends'
import Work from './Work'
import Image from './Image'
import Biography from './Biography.js';
import Header from './Header.js'
import './MainHero.css';


function Hero(props) {

    const [name, setName] = useState({
        name: ''
      })
    
      const [img, setImg] = useState({
        imgURL: ''
      })
    
      const [superBeing, setSuperBeing] = useState({
        person: null
      })



    useEffect(() => {
        fetch('https://www.superheroapi.com/api.php/3224575430950372/1/')
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
        setName(data.name)
      }






    // console.log(superBeing)
    return (
        <main>
        <Header
        name={superBeing.name}
        />
                <Power
        power={superBeing.powerstats}
        />
                <Biography
        bio = {superBeing.biography}
        />
        <Image
        imgUrl={img}
        />


        <span className='bottom'>
        <Work
        work={superBeing.work}
        />
        <Friends
        friends={superBeing.connections}
        />
        </span>
        </main>
    )
}

export default Hero