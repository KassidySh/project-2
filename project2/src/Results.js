import React, { setState, useEffect, useState } from 'react'
import { render } from 'react-dom'
import Main from './main/Main'



function Results(props) {

    //map 20 times through array to show a page each time
    
    let list = props.list.map(item => {
        // multiply by 20 for each page, will add 20 per page


        let set = props.page * 20
        // // add set to item+item to map count up
        item = item + set

        return (<Main key={item}
            id={item}
            setIdAndName={props.setIdAndName}
        />
        )
    })
    return (<div> {list} </div>

    )
}

export default Results