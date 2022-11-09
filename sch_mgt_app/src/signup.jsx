import React from "react";
import Axios from "axios";
// import $ from "jquery";

function SignUp() {
    var [useremail, setEmail] = React.useState("");
    var [userpassword, setPassword] = React.useState("");
    var [user, setUser] = React.useState("");

    const logout = () => {
        Axios.post('http://localhost:3001/logout', {}).then((response) => {
            console.log(response)
        })
    }
        
    const signin = () => {
        Axios.post('http://localhost:3001/register', { 
            username: user,
            mail: useremail, 
            password: userpassword,
        }).then((response) => {
            console.log(response)
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
                    <input type="submit" id="submit" onClick={signin} value="Sign Up"/>
                    <p><a href="/login">Log In</a></p>
                    <p><a href="/logout">Log Out</a></p>
                    
                                        
            </header>
        </div>
        </>
    );
}

export default SignUp