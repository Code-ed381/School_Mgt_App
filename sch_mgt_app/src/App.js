import React from "react";
import Home from './main';
import SignUp from './signup';
import Login from "./login";
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/welcome' element={<Home/>}/>  
        
      <Route path='/login' element={<Login />} />
        
      <Route path='/signup' element={<SignUp/>}/>
      
      {/* <Route path="*" element={<Navigate to='/welcome' replace/>}/> */}
      </Routes>
    </Router>
  )
}

export default App;
