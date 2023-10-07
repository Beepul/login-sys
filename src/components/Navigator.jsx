import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navigator = ({url}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate(`${url}`)
  },[url])
}

export default Navigator
