import React from "react";
import { useState, createContext, useContext } from "react";
import SignUp from './components/signup';
import {Login, UserContext} from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Admin from "./components/admin";
import Landing from "./components/landing_page";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Axios from "axios";


const App = ()=> { 
  const user = useContext(UserContext)
  // const [isAuth, setisAuth] = useState(false)

//   useEffect(()=> {
//     Axios.get('http://localhost:3001/')
//     .then((res)=> {
//       if (res.data.message === 'authorized') {
//         console.log(res.data.message)
//         setMessage(res.data.message)
//       }
//       else {
//         window.location = '/login' 
//       }
//     })
//   }
// )

//   useEffect(
//     Axios.get()
//   )
  // function requireAuth (next)
  // const isAuthenticated = async ()=> {
  //   Axios.get('http://localhost:3001/notAuthorized')
  //   .then((res)=> {
  //     if (res.data) {
  //       console.log('Authorized')
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     window.location = '/login'
  //   })
  // }
  

  return (
    <>
    <Router>
      <Routes>
      <Route index element={<Landing />}/>
      <Route path="/landing" element={<Landing />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </Router>
    </>
  )
}

const Navigation = ()=> {
  <nav>
    <Link to='/landing'>Landing Page</Link>
    <Link to='/home'>Home</Link>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/admin'>Admin</Link>
  </nav>
}

export default App;
