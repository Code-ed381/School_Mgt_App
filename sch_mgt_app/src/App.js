import React from "react";
import { useState, createContext, useContext } from "react";
import SignUp from './components/signup';
import Recover from './components/forgot_pwd';
import Login from "./components/login";
import Students from "./components/students";
import Profile from "./components/profile";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Axios from "axios";
import {createBrowserRouter} from "react-router-dom";


const auth = ()=> { 
  Axios.get('http://localhost:3001/authenticate')
  .then((res)=>{
    if( res.data.message === "User not authenticated") {
      alert("come")
      window.location = '/login'
    }
  })
}


const App = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      { 
        path: 'home',
        element: <Dashboard/>,
        loader: ()=> {auth()}
      },
      {
        path: 'profile',
        element: <Profile/>,
        loader: ()=> {auth()}
      }
    ]
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'signup',
    element: <SignUp/>
  },
  {
    path: 'recover-password',
    element: <Recover/>
  }
])

export default App;
