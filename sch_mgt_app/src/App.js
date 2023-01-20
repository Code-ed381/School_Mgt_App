import React from "react";
import { useState, createContext, useContext } from "react";
import SignUp from './components/signup';
import Recover from './components/forgot_pwd';
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
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// const App = ()=> {
//   const [loggedIn, setLoggedIn ] = useState(true)
//   const toggleRoute = ()=> {
//     setLoggedIn(false);
//   }

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home/>}>
//             <Route path="" element={<Dashboard/>}/>
//             <Route path="students" element={<Students/>} />
//             <Route path="profile" element={<Profile/>} />
//             <Route path="dashboard" element={<Dashboard/>} />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   )
// }


// const App = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Home/>}>
//       <Route path="" element={<Dashboard/>}/>
//       <Route path="students" element={<Students/>} />
//       <Route path="profile" element={<Profile/>} />
//       <Route path="dashboard" element={<Dashboard/>} />
//     </Route>
//   )
// )

const auth = ()=> {
  const user = window.localStorage.getItem('user')

  if(user != 'logged_in') {
    window.location = '/login'
  }
}


const App = createBrowserRouter([
  {
    path: "",
    element: <Home/>,
    children:[
      {
        path: '/',
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
