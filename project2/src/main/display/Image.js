import React, { setState, useEffect, useState } from 'react'
import './MainHero.css';

function Image(props) {

    return (
            <div id='info'>
            <img src={props.imgUrl} alt={props.name} />
            </div>
    )
}

export default Image