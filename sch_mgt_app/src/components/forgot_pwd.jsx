import { useState } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Recover = ()=> {
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
            {/* <!-- ============================================================== -->
            <!-- Main wrapper - style you can find in pages.scss -->
            <!-- ============================================================== --> */}
            <section id="wrapper">
                <div class="login-register" style={{backgroundImage: 'url(../assets/images/background/login-register.jpg)' }}>
                    <div class="login-box card">
                        <div class="card-body">
                            {/* <form class="form-horizontal form-material" id="loginform" action="index.html">
                                <h3 class="text-center m-b-20">Sign In</h3>
                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <input class="form-control" type="text" required="" placeholder="Username"/> </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input class="form-control" type="password" required="" placeholder="Password"/> </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <div class="d-flex no-block align-items-center">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customCheck1"/>
                                                <label class="form-check-label" for="customCheck1">Remember me</label>
                                            </div> 
                                            <div class="ms-auto">
                                                <a href="javascript:void(0)" id="to-recover" class="text-muted"><i class="fas fa-lock m-r-5"></i> Forgot password?</a> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-center">
                                    <div class="col-xs-12 p-b-20">
                                        <button class="btn w-100 btn-lg btn-info btn-rounded text-white" type="submit">Log In</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                        <div class="social">
                                            <button class="btn  btn-facebook" data-bs-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fab fa-facebook-f"></i> </button>
                                            <button class="btn btn-googleplus" data-bs-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" class="fab fa-google-plus-g"></i> </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group m-b-0">
                                    <div class="col-sm-12 text-center">
                                        Don't have an account? <a href="pages-register.html" class="text-info m-l-5"><b>Sign Up</b></a>
                                    </div>
                                </div>
                            </form> */}
                            <form class="form-horizontal" id="" action="index.html">
                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <h3>Recover Password</h3>
                                        <p class="text-muted">Enter your Email and instructions will be sent to you! </p>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <input class="form-control" type="text" required="" placeholder="Email"/> </div>
                                </div>
                                <div class="form-group text-center m-t-20">
                                    <div class="col-xs-12">
                                        <button class="btn btn-primary btn-lg w-100 text-uppercase waves-effect waves-light" type="submit">Send Link</button>
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


export default Recover




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