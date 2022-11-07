import React from "react";
import Axios from "axios";
// import $ from "jquery";

function SignUp() {
    var [useremail, setEmail] = React.useState("");
    var [userpassword, setPassword] = React.useState("");
    var [user, setUser] = React.useState("");

    const signin = () => {
        Axios.post('http://localhost:3001/signup', { 
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
                        placeholder="enter your username" 
                        onChange={(e) => { 
                            setUser(e.target.value)
                        }}
                    /><br/>
                    <input 
                        type="text" 
                        name="mail" 
                        placeholder="enter your email" 
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
                    <input type="submit" id="submit" onClick={signin} value="Sign Up"/>
            </header>
        </div>
        </>
    );
}

export default SignUp