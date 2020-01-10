import React, { setState, useEffect, useState } from 'react'
import './MainHero.css';

function Friends(props) {

    if (props.friends !== undefined) {

let values = (Object.values(props.friends))
let keys = (Object.keys(props.friends))


           
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



export default Friends