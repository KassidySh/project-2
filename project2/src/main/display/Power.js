import React, { setState, useEffect, useState } from 'react'
import './MainHero.css';

function Power(props) {
    const [stats, setStats] = useState({
        stats: {}
    })
    const [intel, setIntel] = useState({
        intel: 0
    })

    // useEffect(() => {
    //     setStats(props.power)
    //     setIntel(props.power.intelligence)
    // },
    //     [props]
    // )

    // console.log(props.power.speed)
    if (props.power !== undefined) {
    return (
        <div className='power'>
            <h1>POWER STATS</h1>

            <ul>
                <ol><h5>intelligence</h5>{}</ol>
<ol><h5>strength</h5>{props.power.strength}</ol> 
<ol><h5>speed</h5>{props.power.speed}</ol> 
<ol><h5>durability</h5>{props.power.durability}</ol> 
<ol><h5>power</h5>{props.power.power}</ol> 
<ol><h5>combat</h5>{props.power.combat}</ol> 
            </ul>
            
        </div>
    )
}
    return (
        <div></div>
    )
}

export default Power