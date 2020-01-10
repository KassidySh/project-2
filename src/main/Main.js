import React, { useState, useEffect } from 'react'
import DisplayHero from './DisplayHero';


function Main(props) {

  const [img, setImg] = useState({
    imgURL: ''
  })

  const [superBeing, setSuperBeing] = useState({
    person: null
  })


  useEffect(() => {
    
    fetch(`https://www.superheroapi.com/api.php/3224575430950372/${props.id}/`)
      .then(response => response.json())
      .then(data => {
        State(data)
      }
      )
      .catch(err => {
        console.error({ err })
      })
  }, [])

  function State(data) {
    setSuperBeing(data)
    setImg(data.image.url)
  }
// console.log(props)
  return (
    
    <div className="App">

 {/* <Link to='/display/Hero'
    > */}
      <DisplayHero
        superBeing={superBeing}
        imgUrl={img}
        setId={props.setId}
        imgFinished={props.imgFinished}
      />
{/* </Link> */}
      <div>



      </div>
      </div>


    // </div>
  )
}

export default Main;
