import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'


const initialState = {
    username: '',
    email: '',
    password: ''
}

const Register = () => {
    const [data,setData] = useState(initialState);
    const navigate = useNavigate();
    const { user } = useContext(Context);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://logsys.onrender.com/api/auth/register',data);
            const message = res.data.message;
            alert(message)
            navigate('/login')
            setData(initialState)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInput = (e) => {
        setData((prevData) => ({...prevData,[e.target.name]: e.target.value}));
    }



    useEffect(() => {
      if(user){
          navigate('/')
      }
  })

  return (
    <Container>
      <div className="form-wrap">
        <h2>Registration Form</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
      <Form.Group className="mb-4" controlId="formBasicText">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" required value={data.username}  name='username' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required value={data.email}  name='email' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required value={data.password} name='password' onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </Container>
  )
}

export default Register
