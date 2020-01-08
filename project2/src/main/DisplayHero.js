import React from 'react'

import { Link } from 'react-router-dom'
import './SingleHero.css'

function DisplayHero(props) {
    let image = props.imgUrl
    let name = props.superBeing.name
    let id = props.superBeing.id
    // console.log(props.superBeing.image)
    return (
        <>
            <Link to='./display/Hero/:name'>
                <div className='superSingle'
                    id={id}
                    key={id}
                    //onCLick get key and assign it to variable to be passed down
                    onClick={(e) => console.log(e.target.id)}
                >
                    <img
                        id={id}
                        src={image} alt={name} />
                    <h2
                        id={id}
                    >{name}</h2>
                </div>
            </Link>
            {/* <Hero /> */}
        </>
    )
}

export default DisplayHero