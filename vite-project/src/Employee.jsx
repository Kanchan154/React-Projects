import React from 'react'
const Employee = (props) => {
    return (
        <div id='tableBox'>
        <table className='table'>
            <tr>
                <th className='tableblock'>{props.firstName}</th>
                <th className='tableblock'>{props.age}</th>
                <th className='tableblock'>{props.Email}</th>
            </tr>
        </table>
        </div>
    )
}
export default Employee