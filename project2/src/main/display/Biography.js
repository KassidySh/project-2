import React, {setState, useEffect, useState} from 'react'
import './MainHero.css';

function Biography(props){
//map through like with korrilla reciepts

    if (props.bio !== undefined) {
    let values = (Object.values(props.bio))
    let keys = (Object.keys(props.bio))



    let list = keys.map((item, index) => {

        return (
            <ol
                key={index}
            ><h5>{item}</h5>{values[index]}</ol>

        )
    })
    return (<div> {list} </div>

    )
}
return (
    <div></div>
)
    }



export default Biography