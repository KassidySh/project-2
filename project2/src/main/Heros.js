import React from 'react'
import DisplayHero from './DisplayHero'

function Heros (props) {

    let superBeing = props.superBeing
    let imgUrl = props.imgUrl
    let ind = props.id
    let name = props.name
    console.log(name)
    return(
        <div>
        <h1>HEROS IS CONNECTED</h1>
        <DisplayHero
         superBeing= {superBeing}
         imgUrl = {imgUrl}
         ind = {ind}
        //  url = {url}   
        />
        </div>
    )
}

export default Heros