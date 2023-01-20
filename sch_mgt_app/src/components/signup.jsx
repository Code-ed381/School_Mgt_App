import { useState } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
                navigate('/')
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
            {/* <!-- Main wrapper - style you can find in pages.scss -->
            <!-- ============================================================== --> */}
            <section id="wrapper">
                <div class="login-register" style={{ backgroundImage: 'url(../assets/images/background/login-register.jpg)'}}>
                    <div class="login-box card">
                        <div class="card-body">
                            <form class="form-horizontal form-material" id="loginform" action="index.html">
                                <h3 class="text-center m-b-20">Sign Up</h3>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input class="form-control" type="text" required="" placeholder="Name" />
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <input class="form-control" type="text" required="" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <input class="form-control" type="password" required="" placeholder="Password"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input class="form-control" type="password" required="" placeholder="Confirm Password"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customCheck1"/>
                                            <label class="form-check-label" for="customCheck1">I agree to all <a href="javascript:void(0)">Terms</a></label> 
                                        </div> 
                                    </div>
                                </div>
                                <div class="form-group text-center p-b-20">
                                    <div class="col-xs-12">
                                        <button class="btn btn-info btn-lg w-100 btn-rounded text-uppercase waves-effect waves-light text-white" type="submit">Sign Up</button>
                                    </div>
                                </div>
                                <div class="form-group m-b-0">
                                    <div class="col-sm-12 text-center">
                                        Already have an account? <Link to="/login" class="text-info m-l-5"><b>Sign In</b></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ============================================================== -->
            <!-- End Wrapper -->
            <!-- ============================================================== --> */}
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