import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import $ from "jquery";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState(0);
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
                    role: role,
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
                <div class="sufee-login d-flex align-content-center flex-wrap">
        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                    <a href="index.html">
                        <img class="align-content" src="images/logo.png" alt="" />
                    </a>
                </div>
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label>User Name</label>
                            <input type="email" class="form-control" placeholder="User Name" />
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox"/> Agree the terms and policy
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30">Register</button>
                        <div class="social-login-content">
                            <div class="social-button">
                                <button type="button" class="btn social facebook btn-flat btn-addon mb-3"><i class="ti-facebook"></i>Register with facebook</button>
                                <button type="button" class="btn social twitter btn-flat btn-addon mt-2"><i class="ti-twitter"></i>Register with twitter</button>
                            </div>
                        </div>
                        <div class="register-link m-t-15 text-center">
                            <p>Already have account ? <a href="/login"> Sign in</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default SignUp

{/* <div className="App">
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
            <label>Choose your role</label><br />
            <input 
                id="admin"
                type="radio" 
                name="role" 
                value="admin" 
                onChange={(e)=> setRole(e.target.value)}
            />
            <label for='admin'>Admin</label><br/>
            <input
                id="faculty"
                type="radio" 
                name="role" 
                value="faculty" 
                onChange={(e)=> setRole(e.target.value)}
            />
            <label for='faculty'>Faculty</label><br/>
            <input 
                id="student"
                type="radio" 
                name="role" 
                value="student" 
                onChange={(e)=> setRole(e.target.value)}
            />
            <label for="student">Student</label><br/>
            <input type="submit" id="submit" onClick={handleClick} value="Sign Up"/>
            <input type="submit" id="logout" onClick={logout} value="Log out"/>
            <p><a href="/login">Log In</a></p>
            <p><a href="/logout">Log out</a></p>
    </header>
</div> */}