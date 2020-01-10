import React, { setState, useEffect, useState } from 'react'
import './MainHero.css';

function Header(props) {
    if (props.name !== undefined) {
    return (
        <h1 className='header'>{props.name}</h1>
    )
    }
    return (
        <div></div>
    )
}

export default Header