import React, { useContext, useEffect, useState } from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

const NavBar = () => {
  const { user,dispatch } = useContext(Context); 
  const navigate = useNavigate();


   const handleLogOut = () => {
    dispatch({type: "LOGOUT"})
    navigate('/')
   }

  return (
    <>
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to='/'>
            <Navbar.Brand>Login-System</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {
              user?.role === 'admin' && (
            <LinkContainer to='/dashbord'>
                <Nav.Link>Dashbord</Nav.Link>
            </LinkContainer>
              )
            }
            {
                user && (
                    <LinkContainer to={'/users'}>
                        <Nav.Link>Users</Nav.Link>
                    </LinkContainer>
                )
            }
          </Nav>
          <Nav className="ms-auto">
            {user ? (
                 <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            ) : (
                <>
            <LinkContainer to={'/register'}>
                <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/login'}>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
                </>
               
            )
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
    {/* <Outlet /> */}
    </>
  )
}

export default NavBar
