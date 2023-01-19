import React from "react";
import { useState, createContext, useContext } from "react";
import SignUp from './components/signup';
import Login from "./components/login";
import Students from "./components/students";
import Profile from "./components/profile";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Admin from "./components/admin";
import Landing from "./components/landing_page";
import Axios from "axios";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom";


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route path="students" element={<Students/>} />
      <Route path="profile" element={<Profile/>} />
      <Route path="dashboard" element={<Dashboard/>} />
    </Route>
  )
)


export default App;
