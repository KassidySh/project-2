import React from 'react'
import DisplayHero from './DisplayHero'

function Heros(props) {

  let superBeing = props.superBeing
  let imgUrl = props.imgUrl
  let ind = props.id
  let name = props.name

  return (
    <div>

      <DisplayHero
        superBeing={superBeing}
        imgUrl={imgUrl}
        ind={ind}
      //  url = {url}   
      />
    </div>
  )
}

export default Heros