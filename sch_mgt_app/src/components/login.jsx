import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Login() {
    // const [data, setData] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    //Get the values from the database using ajax
    const navigate = useNavigate() 

    const logout = async (e)=>  {
        e.preventDefault()

        Axios.get('http://localhost:3001/logout')
        .then((res)=>{
            setMessage(res.data.message) 
            window.location = '/login'
        })
    }

    const handleClick = (e)=> {
        e.preventDefault()

        
        Axios.post('http://localhost:3001/login/password', {
            username: mail,
            password: password
        })
        .then((res)=> {
            setMessage(res.data.message)
        })
    }
    
    if (message === 'invalid') {
        window.location = '/login'
        setMessage('')
        // await setTimeout(()=> {
        // }, 2000)
    }
    else if (message === 'success') {
        window.location = '/'
        setMessage('')
        // await setTimeout(()=> {
        // }, 2000)
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <h2>Login</h2>
                <h3>{message}</h3>
                <input 
                    type="mail" 
                    name="mail" 
                    placeholder="Enter your email" 
                    onChange={(e) => { 
                        setMail(e.target.value)
                    }}
                /><br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    onChange={(e) => { 
                        setPassword(e.target.value)
                    }}
                /><br />
                <input type="submit" id="submit" onClick={handleClick} value="Log in"/>
                <input type="submit" id="logout" onClick={logout} value="Log out"/>
                <p><a href="/signup">Sign Up</a></p>
                {/* <p><a href="/logout">Log out</a></p> */}
            </header>
        </div>
        </>
    );
}


export default Login