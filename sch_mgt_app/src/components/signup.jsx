import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import $ from "jquery";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [admin, setAdmin] = useState(0);
    const [password, setPassword] = useState("");
    const [re_password, setRe_password] = useState("");
    const [message, setMessage] = useState('')

    // const logout = () => {
    //     Axios.post('http://localhost:3001/logout', {}).then((response) => {
    //         console.log(response)
    //     })
    // }

    // const handleChange = (e) => {
    //     setTask(e.target.value)
    // }

    const navigate = useNavigate() 
      
    const handleClick = async (e)=> {
        e.preventDefault()
        if (re_password === password) {
            try {
                await Axios.post('http://localhost:3001/signup/new', {
                    username: username,
                    email: email,
                    admin: admin,
                    password: password,
                })
                navigate('/login')
                try {
                    const res = await Axios.get('http://localhost:3001/userAlreadyExists')
                    setMessage(res.data.message)
                
                }
                catch(err) {
                    console.log(err)
                }
            }
            catch(err) {
                console.log(err)
            }
        } 
        else {
            setMessage("Passwords do not match")
        }
    }
    
    const logout = async (e)=>{
        e.preventDefault()
        try {
            await Axios.get('http://localhost:3001/logout')
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <h2>Sign Up</h2>
                <h5>{message}</h5>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter your username"
                        onChange={(e) => { 
                            setUsername(e.target.value)
                        }}
                        required
                    /><br />
                    <input 
                        type="mail" 
                        name="email" 
                        placeholder="Enter your email" 
                        onChange={(e) => { 
                            setEmail(e.target.value)
                        }}
                        required
                    /><br />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        onChange={(e) => { 
                            setPassword(e.target.value)
                        }}
                        required
                    /><br />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Re-type your password" 
                        onChange={(e) => { 
                            setRe_password(e.target.value)
                        }}
                        required
                    /><br />                   
                    <input 
                        type="checkbox" 
                        name="checkbox" 
                        onChange={(e) => { 
                            setAdmin(1)
                        }}
                        required
                    /> <span>Admin?</span><br />
                    <input type="submit" id="submit" onClick={handleClick} value="Sign Up"/>
                    <input type="submit" id="logout" onClick={logout} value="Log out"/>
                    <p><a href="/login">Log In</a></p>
                    <p><a href="/logout">Log out</a></p>
            </header>
        </div>
        </>
    );
}

export default SignUp