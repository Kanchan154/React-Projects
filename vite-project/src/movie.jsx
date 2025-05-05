import React from 'react'

const movie = (props) => {
  return (
    <div className='movie'>
    <img src={props.img}/>   
    <h1 id='hello'>{props.title}</h1>
    <h2>{props.year}</h2>
    </div>
  )
}

export default movie