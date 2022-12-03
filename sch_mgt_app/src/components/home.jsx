import { useState  } from "react";
import { Navigate } from "react-router-dom";
import Axios from "axios";

function Home({user}) {
  if (!user) {
    console.log(user)
    return <Navigate to='/landing' replace/>
  }

  return (
    <>
    <div>
      <h2>Enter your task</h2>
    </div>
    </>
  );
}

export default Home;