import React from 'react'
const Student = (props) => {
  return (
    <div className='student'>
    <h1>{props.name}</h1>
    <h2>{props.class}</h2>
    <h6>{props.college}</h6>
    </div>
  )
}

export default Student