import { useState, useRef, useEffect } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import $ from "jquery";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const SignUp = ()=> {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [ user, pwd, matchPwd])

    // const [role, setRole] = useState(0);
    // const [password, setPassword] = useState("");
    // const [re_password, setRe_password] = useState("");
    // const [message, setMessage] = useState('')

    // const logout = () => {
    //     Axios.post('http://localhost:3001/logout', {}).then((response) => {
    //         console.log(response)
    //     })
    // }

    // const handleChange = (e) => {
    //     setTask(e.target.value)
    // }


    const navigate = useNavigate() 
      
    const handleSubmit = async (e)=> {
        e.preventDefault()

        //Error messages for various errors
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);

        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const res = await Axios.post('http://localhost:3001/register',
                JSON.stringify({ user, email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(res.data);
            console.log(res.accessToken);
            console.log(JSON.stringify(res));
            setSuccess(true);

        }
        catch (err) {
            if (!err?.res) {
                setErrMsg('No server response');
            }
            else if ( err.res?.status === 409) {
                setErrMsg('Username already exists')
            }
            else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus(); 
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
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                <h3 class="text-center m-b-20">Sign Up</h3>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input 
                                            class={validName ? "form-control is-valid" : "form-control" && !user ? "form-control": "form-control is-invalid"}
                                            type="text" 
                                            required
                                            ref={userRef}
                                            placeholder="Name"
                                            autoComplete="off" 
                                            onChange={(e) => { 
                                                setUser(e.target.value)
                                            }}
                                            aria-invalid = {validName ? "false" : "true"}
                                            aria-describedby = "uidnote"
                                            onFocus = {()=> setUserFocus(true)}
                                            onBlur = {()=> setUserFocus(false)}
                                        />
                                        <p id="uidnote" className={userFocus && user && !validName ? "instructions": "offscreen"}>
                                            <i class="ti-info-alt" style={{margin: '5px'}}></i>
                                             4 to 24 characters.<br/>
                                            Must begin with a letter.<br/>
                                            Letters, numbers, underscores, hyphens allowed.
                                        </p>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <input 
                                            class={validEmail ? "form-control is-valid" : "form-control" && !email ? "form-control": "form-control is-invalid"}
                                            type="text" 
                                            required
                                            placeholder = "Email"
                                            autoComplete = "off" 
                                            onChange={(e) => { 
                                                setEmail(e.target.value)
                                            }}
                                            aria-invalid = {validEmail ? "false" : "true"}
                                            aria-describedby = "emailnote"
                                            onFocus = {()=> setEmailFocus(true)}
                                            onBlur = {()=> setEmailFocus(false)}
                                        />
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <div class="col-xs-12">
                                        <input 
                                            class={validPwd ? "form-control is-valid" : "form-control" && !pwd ? "form-control": "form-control is-invalid"}
                                            type="password" 
                                            required 
                                            placeholder="Password"
                                            onChange={(e) => { 
                                                setPwd(e.target.value)
                                            }}
                                            onFocus = {()=> setPwdFocus(true)}
                                            onBlur = {()=> setPwdFocus(false)}
                                        />
                                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions": "offscreen"}>
                                            <i class="ti-info-alt" style={{margin: '5px'}}></i>
                                             8 to 24 characters.<br/>
                                            Must include uppercase and lowercase letters,<br/>
                                            a number and a special character.<br/>
                                            Allowed special characters: ! @ # $ %
                                        </p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                    <input 
                                            class={validMatch && matchPwd ? "form-control is-valid" : "form-control" && (validMatch || !matchPwd) ? "form-control": "form-control is-invalid"}
                                            type="password" 
                                            required
                                            placeholder="Confirm Password"
                                            onChange={(e) => { 
                                                setMatchPwd(e.target.value)
                                            }}
                                            onFocus = {()=> setMatchFocus(true)}
                                            onBlur = {()=> setMatchFocus(false)}
                                        />
                                        <p id="pwdnote" className={matchFocus && !validMatch ? "instructions": "offscreen"}>
                                            <i class="ti-info-alt" style={{margin: '5px'}}></i>
                                             Must match the password input field
                                        </p>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input 
                                                type="checkbox" 
                                                class="form-check-input" 
                                                id="customCheck1"
                                            />
                                            <label class="form-check-label" for="customCheck1">I agree to all <a href="#">Terms</a></label> 
                                        </div> 
                                    </div>
                                </div>
                                <div class="form-group text-center p-b-20">
                                    <div class="col-xs-12">
                                        <button 
                                            class="btn btn-info btn-lg w-100 btn-rounded text-uppercase waves-effect waves-light text-white" 
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group m-b-0">
                                    <div class="col-sm-12 text-center">
                                        Already have an account? <Link to="/login" class="text-info m-l-5"><b>Sign In</b></Link>
                                    </div>
                                </div>
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

