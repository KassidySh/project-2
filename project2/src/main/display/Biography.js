import React, {setState, useEffect, useState} from 'react'
import './MainHero.css';

function Biography(props){
//map through like with korrilla reciepts

    let bio = props.bio
    // console.log(bio)
    return(
        <div className='about'>
            {/* <p>{this.bio.aliases[0]}</p> */}
        <h2>Biography</h2>
        </div>
    )
}

export default Biography