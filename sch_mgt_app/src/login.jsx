import { useState } from "react";
import Axios from "axios";
// import $ from "jquery";

function Login() {
    // const [dataS, setDataS] = React.useState(null);
    const [message, setMessage] = useState(null);
    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");


    const signin = () => {
        Axios.post('http://localhost:3001/login/password', { 
            username: user, 
            password: pass,
        }).then((response) => {
            if (response.data.message) {
               setMessage(response.data.message)
            }
        })
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <h2>Login</h2>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter user name" 
                        onChange={(e) => { 
                            setUser(e.target.value)
                        }}
                    /><br/>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password" 
                        onChange={(e) => { 
                            setPass(e.target.value)
                        }}
                    /><br />
                    <input type="submit" id="submit" onClick={signin} value="Log In"/>
                    <p><a href='/signup'>Sign Up</a></p>
                    <h4>{message}</h4>
                    
            </header>
        </div>
        </>
    );
}

export default Login