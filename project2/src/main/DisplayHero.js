import React, { useEffect } from 'react'
import Hero from './display/Hero'
import { Link, Route, Switch, } from 'react-router-dom'
import './SingleHero.css'

function DisplayHero(props) {
    let image = props.imgUrl
    let name = props.superBeing.name
    let id = props.superBeing.id
    // console.log(props.superBeing.image)
    return (
        <>
            <Link to='/Hero/:name'>
                <div className='superSingle'
                    key={id}
                    //onCLick get key and assign it to variable to be passed down
                    onClick={() => console.log(this.key)}
                >
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                </div>
            </Link>
            {/* <Hero /> */}
        </>
    )
}

export default DisplayHero