import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'


const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const [data,setData] = useState(initialState);
    const { user, dispatch, isFetching} = useContext(Context);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post('https://logsys.onrender.com/api/auth/login',data);
            dispatch({type:"LOGIN_SUCCESS", payload: res.data.user})
            // console.log(navigate)
            navigate(-1)
            setData(initialState)
        } catch (error) {
          console.log(error)
          dispatch({type:"LOGIN_FAILURE"})
        }
    }


    const handleInput = (e) => {
        setData((prevData) => ({...prevData,[e.target.name]: e.target.value}));
    }
    
    useEffect(() => {
        if(user){
            navigate(-1)
        }
    })
  return (
    <Container>
      <div className="form-wrap">
        <h2>Login Form</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required value={data.email}  name='email' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required value={data.password} name='password' onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" className='login_btn' disabled={isFetching}>
        Submit
      </Button>
    </Form>
      </div>
    </Container>
  )
}

export default Login
