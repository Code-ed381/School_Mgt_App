import { useState, useEffect } from "react";

function Main() {
    const [ message, setMessage ] = useState('')

    useEffect(() => {
        fetch("/welcome")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

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