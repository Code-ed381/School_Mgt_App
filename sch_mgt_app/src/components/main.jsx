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
        const fetchdata = async()=> {
          const data = await Axios.get('http://localhost:3001/')
          setMessage(data.message)
        }

        fetchdata()
          .catch(console.error);
    }, [])

    

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