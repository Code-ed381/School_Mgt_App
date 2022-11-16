import { useState } from "react";
import Axios from "axios";
// import $ from "jquery";

function SignUp() {
    var [useremail, setEmail] = useState("");
    var [userpassword, setPassword] = useState("");
    var [user, setUser] = useState("");
    const[message, setMessage] = useState('')

    const logout = () => {
        Axios.post('http://localhost:3001/logout', {}).then((response) => {
            console.log(response)
        })
    }
        
    const signup = () => {
        Axios.post('http://localhost:3001/register', { 
            username: user,
            mail: useremail, 
            password: userpassword,
        }).then((response) => {
            if (response.data.message) {
                setMessage(response.data.message)
                window.location = '/login'
                console.log(message)
            }
        })
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <h2>Sign Up</h2>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter username" 
                        onChange={(e) => { 
                            setUser(e.target.value)
                        }}
                    /><br/>
                    <input 
                        type="text" 
                        name="mail" 
                        placeholder="Enter email" 
                        onChange={(e) => { 
                            setEmail(e.target.value)
                        }}
                    /><br/>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password" 
                        onChange={(e) => { 
                            setPassword(e.target.value)
                        }}
                    /><br />
                    <input type="submit" id="submit" onClick={signup} value="Sign Up"/>
                    <p><a href="/login">Log In</a></p>
                    <p><a href="/logout">Log Out</a></p>
                    
                                        
            </header>
        </div>
        </>
    );
}

export default SignUp