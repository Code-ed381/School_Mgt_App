import React from "react";
// import Home from './components/home';
import SignUp from './components/signup';
import Login from "./components/login";
import Main from "./components/main";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


function App() { 
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Main />}/>  
      <Route exact path='/register' element={<SignUp/>}/>  
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      {/* 

      <Route path='/register' element={<SignUp />} />

      <Route path='/welcome' element={<Main />} />

      <Route path='/logout' element={<Navigate to='/logout' />} />

      <Route path='/login-success' element={<Navigate to='/login-success' />} />

      <Route path='/login-failure' element={<Navigate to='/login-failure' />} />

      <Route path='/protected-route' element={<Navigate to='/protected-route' />} />
        
      <Route path='/signup' element={<SignUp/>}/> */}

      
      {/* <Route path="*" element={<Navigate to='/welcome' replace/>}/> */}
      </Routes>
    </Router>
  )
}

export default App;
