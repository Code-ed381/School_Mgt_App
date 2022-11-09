import React from "react";
import Home from './home';
import SignUp from './signup';
import Login from "./login";
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>  
        
      <Route path='/login' element={<Login />} />

      <Route path='/logout' element={<Navigate to='/logout' />} />

      <Route path='/login-success' element={<Navigate to='/login-success' />} />

      <Route path='/login-failure' element={<Navigate to='/login-failure' />} />

      <Route path='/protected-route' element={<Navigate to='/protected-route' />} />
        
      <Route path='/signup' element={<SignUp/>}/>

      
      {/* <Route path="*" element={<Navigate to='/welcome' replace/>}/> */}
      </Routes>
    </Router>
  )
}

export default App;
