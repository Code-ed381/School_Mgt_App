import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import $ from "jquery";

function SignUp() {
    const [firstname, setFirstName] = useState("");
    const [middlename, setMiddleName] = useState("");
    const [admin, setAdmin] = useState(0);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
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
        try {
            const res = await Axios.get('http://localhost:3001/userAlreadyExists')
            setMessage(res.data.message)
        
        }
        catch(err) {
            console.log(err)
        }

        try {
            await Axios.post('http://localhost:3001/signup/new', {
                // firstname: firstname,
                // middlename: middlename,
                admin: admin,
                username: mail, 
                password: password,
            })
            navigate('/login')
        }
        catch(err) {
            console.log(err)
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
                        name="firstname" 
                        placeholder="Enter your first name" 
                        onChange={(e) => { 
                            setFirstName(e.target.value)
                        }}
                    /><br/>
                    <input 
                        type="text" 
                        name="middlename" 
                        placeholder="Enter your middle name"
                        onChange={(e) => { 
                            setMiddleName(e.target.value)
                        }}
                    /><br/>
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Enter your last name"
                        onChange={(e) => { 
                            // setLastName(e.target.value)
                        }}
                    /><br />
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
                    <input 
                        type="checkbox" 
                        name="checkbox" 
                        onChange={(e) => { 
                            setAdmin(1)
                        }}
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