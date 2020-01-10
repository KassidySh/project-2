import React from 'react'
import Main from './main/Main'
import './App.css';

function Results(props) {
    console.log('results is being called')
    //map 20 times through array to show a page each time
    if (props.list !== undefined) {
        let list = props.list.map(item => {
            // multiply by 20 for each page, will add 20 per page
            let set = props.page * 20
            // // add set to item+item to map count up
            item = item + set

            return (
                <Main key={item}
                    id={item}
                    setId={props.setId}
                />
            )
        })
        return (
            <div id='results'>
                <div id='background'>
                    <h1>SUPER FACTS</h1>
                </div>
                {list}
            </div>

        )
    }
    return (
        <div></div>
    )
}

export default Results