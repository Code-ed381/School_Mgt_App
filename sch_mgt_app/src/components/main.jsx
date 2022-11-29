import { useState, useEffect } from "react";
import Axios from "axios";

function Main() {
    const [ message, setMessage ] = useState('')

    // useEffect(() => {
    //     fetch("/")
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    // }, []);

    useEffect(()=> {
          Axios.get('http://localhost:3001/')
          .then((res)=> {
            if (res.data.message === 'authorized') {
              console.log(res.data.message)
              setMessage(res.data.message)
            }
            else {
              window.location = '/login' 
            }
          })
        }
      )

    

  return (
    <>
    <div>
      <header>
        <h2>Welcome</h2>
        <p>{message}</p>
      </header>
    </div>
    </>
  );
}

export default Main;