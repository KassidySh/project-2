import React, { useState } from 'react'
import Button from './Button'
import './Nav.css';



function Form(props) {

    const [search, setSearch] = useState({
        search: null
    })

    return (
        <div className='form'>
            <input
                onChange={e => setSearch(e.target.value)}
                placeholder='Search' />
            <Button
                setList={props.setList}
                search={search}
            />
        </div>
    )
}

export default Form