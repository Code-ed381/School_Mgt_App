import { useState } from "react";
import Axios from "axios";

const Login = ()=> {
    const [user, setUser] = useState(null);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    //Get the values from the database using ajax
    // const navigate = useNavigate() 

    const logout = async (e)=>  {
        e.preventDefault()

        Axios.get('http://localhost:3001/logout')
        .then((res)=>{
            setMessage(res.data.message) 
            window.location = '/'
            setUser(null) 
        })
    }

    const handleClick = async (e)=> {
        e.preventDefault()

        Axios.post('http://localhost:3001/login/password', {
            username: mail,
            password: password
        })
        .then((res)=> {
            console.log(res)
            try {
                setUser({
                    id: res.data[0].id,
                    username: res.data[0].email,
                    roles: res.data[0].role
                })
                window.localStorage.setItem('user', res.data[0].role)
                window.location = '/home'
            }
            catch (err) {
                console.log(err)
            }
        })       
    }
    
    const viewUser = ()=> {
        alert(window.localStorage.getItem('user'))
    }


    return (
        <>
            <div class="sufee-login d-flex align-content-center flex-wrap bg-dark">
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
                                    <label>Email address</label>
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        placeholder="Email"
                                        onChange={(e) => { 
                                            setMail(e.target.value)
                                        }} 
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Password"
                                        onChange={(e) => { 
                                            setPassword(e.target.value)
                                        }} 
                                    />
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                    <label class="pull-right">
                                        <a href="#">Forgotten Password?</a>
                                    </label>

                                </div>
                                <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30" onClick={handleClick}>Sign in</button>
                                <div class="social-login-content">
                                    <div class="social-button">
                                        <button type="button" class="btn social facebook btn-flat btn-addon mb-3"><i class="ti-facebook"></i>Sign in with facebook</button>
                                        <button type="button" class="btn social twitter btn-flat btn-addon mt-2"><i class="ti-twitter"></i>Sign in with twitter</button>
                                    </div>
                                </div>
                                <div class="register-link m-t-15 text-center">
                                    <p>Don't have account ? <a href="signup"> Sign Up Here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login




{/* <div className="App">
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
        {user ? (<input type="submit" id="logout" onClick={logout} value="Log out"/>): (<input type="submit" id="submit" onClick={handleClick} value="Log in"/>)}
        
        <input type="submit" id="user" onClick={viewUser} value="View user"/>
        <p><a href="/signup">Sign Up</a></p>
    </header>
</div> */}