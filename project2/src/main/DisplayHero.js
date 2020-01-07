import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SingleHero.css'

function DisplayHero (props){
    let image = props.imgUrl
    let name = props.superBeing.name

    return(
        <Link to='/Hero:name'>
        <div className='superSingle' 
        key={props.ind}
        >
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
        </Link>
    )
}

export default DisplayHero