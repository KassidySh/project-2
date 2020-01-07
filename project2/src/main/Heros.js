import React from 'react'
import DisplayHero from './DisplayHero'

function Heros(props) {


  let imgUrl = props.imgUrl
  let superBeing = props.superBeing


  return (
    <div>

      <DisplayHero

        imgUrl={imgUrl}
        superBeing={superBeing}
  
      />
    </div>
  )
}

export default Heros