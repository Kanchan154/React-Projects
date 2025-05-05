import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./App.css"

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState([])

    function addData() {
        setData([...data, { name: name, email: email }]),
            setName(""),
            setEmail("")

    }
    function RemoveItem(index) {
        let arr = data;
        arr.splice(index, 1)
        setData([...arr])


    }
    return (
        <div>
            <h1 id="Heading">Employee sheet </h1>

            <div className='parent'>
                <div className='to-do'>

                    <Stack spacing={2} direction="row" className='main'>
                        <TextField value={name} onChange={(event) => {
                            setName(event.target.value)
                        }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }} id="utlined-basic" label="Email" variant="outlined" />
                        <Button onClick={addData} className='btn' variant="outlined" >ADD</Button>
                    </Stack>
                </div>
                <div className='data'>
                    <div className='data_value'>
                        <h4>Name:</h4>
                        <h4>Email:</h4>
                        <h4>Remove</h4>

                    </div>
                    <hr />
                    {data.map((e, index) => {
                        return <div key={index} className="data_value">
                            <h4>{e.name}</h4>
                            <hr />
                            <h4>{e.email}</h4>
                            <hr />
                            <Button onClick={() => RemoveItem(index)}>Remove:</Button>
                        </div>;
                    })}

                </div>
            </div>
        </div>
    )
}

export default Login