import React from 'react'

import { Link } from 'react-router-dom'
import './SingleHero.css'

function DisplayHero(props) {
    let image = props.imgUrl
    let name = props.superBeing.name
    let id = props.superBeing.id


    return (

        <>
            <div className='superSingle'
                id={id}
                key={id}
                //e.target.value has id need to call it in props.setId onClick
                onClick={(e) => {
                    let id = (e.target.id)
                    props.setId(id)
                }}
            >
                <img
                    id={id}
                    src={image} alt={name} />
                <Link to={`/Hero/${id}`}
                    id={id}
                >
                    {name}</Link>
            </div>

        </>
    )
}

export default DisplayHero