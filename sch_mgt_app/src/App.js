import React from "react";
import { useState, createContext, useContext } from "react";
// School App
import SignUp from './components/school/register';
import Recover from './components/school/forgot_pwd';
import Login from "./components/school/login";
import Students from "./components/school/students";
import Users from "./components/school/users";
import Profile from "./components/school/profile";
import Home from "./components/school/home";
import Dashboard from "./components/school/dashboard";
import Admin from "./components/school/admin";
import Unauthorized from "./components/school/unauthorized";
import RequireAuth from './components/school/requireAuth'

//Church App
import Events from './components/church/Events'
import EventSponsors from './components/church/Sponsors' 
import EventAppUsers from './components/church/Users' 



import { Routes, Route } from "react-router-dom";


const App = ()=> {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<SignUp />}/>
      <Route path="unauthorized" element={<Unauthorized/>}/>
      <Route path="forgot-password" element={<Recover/>}/>

      <Route path="/" element={<Home />}>
        <Route path="/events" element={<Events/>} />
        <Route path="/sponsors" element={<EventSponsors/>} />
        <Route path="/addevent" element={<Home/>}/>
        <Route path="/eventusers" element={<EventAppUsers/>}/>

        <Route element={<RequireAuth allowedRoles={[1984, 5150]}/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="students" element={<Students/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={[5150]}/>}>
          <Route path="admin" element={<Admin/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

// const App = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>,
//     children: [
//       { 
//         element: <RequireAuth allowedRoles={[2001]}/>,
//         children:[
//           { 
//             path: '/dashboard',
//             element: <Dashboard/>
//           }
//         ]
//       },
//       { 
//         element: <RequireAuth allowedRoles={[1984]}/>,
//         children:[
//           { 
//             path: 'profile',
//             element: <Profile/>,
//           },
//           {
//             path: 'students',
//             element: <Students/>, 
//           }
//         ]
//       },
//       { 
//         element: <RequireAuth allowedRoles={[5150]}/>,
//         children:[
//           {
//             path: 'admin',
//             element: <Admin/>, 
//           }
//         ]
//       }
//     ]
//   },
//   {
//     path: 'login',
//     element: <Login/>
//   },
//   {
//     path: 'signup',
//     element: <SignUp/>
//   },
//   {
//     path: 'recover-password',
//     element: <Recover/>
//   },
//   {
//     path: 'unauthorized',
//     element: <Unauthorized/>
//   }
// ])

export default App;
