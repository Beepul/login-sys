import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'
// import dotenv from "dotenv";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import {createBrowserRouter,  RouterProvider, createRoutesFromElements, Route, Outlet} from "react-router-dom";
import Users from './pages/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext, useEffect, useState } from 'react';
import Navigator from './components/Navigator';
import { Context } from './context/Context';
import {Protected,ProtectedAdmin} from './components/Protected';
import Dashbord from './pages/Dashbord';



function App() {
    


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/users' element={<Protected Component={Users} />} />
        <Route path='/dashbord' element={<ProtectedAdmin Component={Dashbord} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;


const Root = () => {
  return(
  <>
    <NavBar />
    <div>
      <Outlet />
    </div>
  </>
  )
  
}