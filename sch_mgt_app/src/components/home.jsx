import { useState  } from "react";
import { Link, Navigate } from "react-router-dom";
import Axios from "axios";

function Home({user}) {
  // if (!user) {
  //   console.log(user)
  //   return <Navigate to='/landing' replace/>
  // }

  return (
    <>
    <div>
      <Link to="/dashboard"><h4>Dashboard</h4></Link>
      <Link to="/admin"><h4>Admin</h4></Link>
      <Link to="/landing"><h4>Landing Page</h4></Link>
      <Link to="/profile"><h4>Profile</h4></Link>
    </div>
    </>
  );
}

export default Home;