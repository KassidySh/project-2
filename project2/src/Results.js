import React, { setState, useEffect, useState } from 'react'
import { render } from 'react-dom'
import Main from './main/Main'

let item = 0

function Results(props) {
    console.log('this is the results ',props.list)
    //map 20 times through array to show a page each time

    let list = props.list.map(item => {
        // multiply by 20 for each page, will add 20 per page
        console.log('this is the page',props.page)
        let set = props.page * 20
        // add set to item+item to map count up
        item = item + set
        console.log('this is the id',item)
        return (
            <Main
                key={item}
                id={item} />
        )
    })
    return (
        <div>{list}</div>

    )
}

export default Results