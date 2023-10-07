import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom';

export const Protected = (props) => {
    const {Component} = props;
    const { user } = useContext(Context);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user || !user.token){
            navigate('/login')
        }
    })

  return (
    <div>
      <Component />
    </div>
  )
}

export const ProtectedAdmin = (props) => {
    const {Component} = props;
    const { user } = useContext(Context);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user || !user.token || user.role != 'admin'){
            navigate('/')
        }
    })

  return (
    <div>
      <Component />
    </div>
  )
}


