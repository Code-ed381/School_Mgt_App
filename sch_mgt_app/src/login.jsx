import React from "react";
import Axios from "axios";
// import $ from "jquery";

function Login() {
    var [useremail, setEmail] = React.useState("");
    var [userpassword, setPassword] = React.useState("");

    const signin = () => {
        Axios.post('http://localhost:3001/login/password', { 
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
                <h2>Login</h2>
                    <input 
                        type="text" 
                        name="mail" 
                        placeholder="Enter email or password" 
                        onChange={(e) => { 
                            setEmail(e.target.value)
                        }}
                    /><br/>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="enter your password" 
                        onChange={(e) => { 
                            setPassword(e.target.value)
                        }}
                    /><br />
                    <input type="submit" id="submit" onClick={signin} value="Log In"/>
            </header>
        </div>
        </>
    );
}

export default Login