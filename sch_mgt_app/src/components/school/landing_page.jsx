// import { useState, useEffect } from "react";
// import Axios from "axios";
import { Link } from "react-router-dom";

const Landing = ()=> {
    // const [ message, setMessage ] = useState('')

    // useEffect(() => {
    //     fetch("/")
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    // }, []);

    // useEffect(()=> {
    //       Axios.get('http://localhost:3001/')
    //       .then((res)=> {
    //         if (res.data.message === 'authorized') {
    //           console.log(res.data.message)
    //           setMessage(res.data.message)
    //         }
    //         else {
    //           window.location = '/login' 
    //         }
    //       })
    //     }
    //   )

    

  return (
    <>
      <Link to="/login"><h4>Login</h4></Link>
      <Link to="/signup"><h4>Sign Up</h4></Link>
    </>
  );
}

export default Landing;