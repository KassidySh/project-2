import React, { setState, useEffect, useState } from 'react'
import './MainHero.css';

function Header(props) {
    // console.log(props)
    return (
        <h1 className='header'>{props.name}</h1>
    )
}

export default Header