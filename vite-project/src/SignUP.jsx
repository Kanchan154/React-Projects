import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Employee from './Employee'

const SignUP = () => {
  const [state, setState] = useState(5)
  const [employee, setEmployee] = useState([])
  useEffect(() => {
    async function getdata() {
      const data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const dataJson = await data.json();
      setEmployee(dataJson)
    }
    getdata();
  }, [state])
  return (
    <div>
      
      {
        employee.map((e) => {
          return (
            <div>
              <Employee
                firstName={e.firstName}
                age={e.age}
                Email={e.email}
              />
            </div>

          )
        })
      }
      <button onClick={() => { setState(state + 1) }}>{state}</button>
    </div>
  )
}

export default SignUP