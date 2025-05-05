import React from 'react'
import CompB from './CompB'
const CompA = (props) => {
  return (
  <div>
  <h1>CompA</h1>
  <CompB data={props.data}/>
  </div>
  )
}

export default CompA