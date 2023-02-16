import React from "react";
import { useState, createContext, useContext } from "react";
import SignUp from './components/register';
import Recover from './components/forgot_pwd';
import Login from "./components/login";
import Students from "./components/students";
import Profile from "./components/profile";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Admin from "./components/admin";
import Unauthorized from "./components/unauthorized";
import RequireAuth from './components/requireAuth'
import {createBrowserRouter} from "react-router-dom";


const App = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      { 
        element: <RequireAuth allowedRoles={[2001]}/>,
        children:[
          { 
            path: '/dashboard',
            element: <Dashboard/>
          }
        ]
      },
      { 
        element: <RequireAuth allowedRoles={[1984]}/>,
        children:[
          { 
            path: 'profile',
            element: <Profile/>,
          },
          {
            path: 'students',
            element: <Students/>, 
          }
        ]
      },
      { 
        element: <RequireAuth allowedRoles={[5150]}/>,
        children:[
          {
            path: 'admin',
            element: <Admin/>, 
          }
        ]
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
  },
  {
    path: 'unauthorized',
    element: <Unauthorized/>
  }
])

export default App;
