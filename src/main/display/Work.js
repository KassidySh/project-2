import React, { setState, useEffect, useState } from 'react'
import './MainHero.css';

function Work(props) {

    if (props.work !== undefined) {

        return (
            <div className='work'>
                <ul>
                    <ol><h5>Work</h5>{props.work.occupation}</ol>
                </ul>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default Work