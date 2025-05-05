import React from 'react'
import { useState } from 'react'
import CompA from './CompA'

const UseContext = () => {
    const [data,setData]=useState("Kanchan")
  return (
      <div>
      <h1>Main Component</h1>
      <CompA data={data}/>
      </div>
      )
}

export default UseContext