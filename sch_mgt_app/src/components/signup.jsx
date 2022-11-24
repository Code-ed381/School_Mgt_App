import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import $ from "jquery";

function SignUp() {
    const [firstname, setFirstName] = useState("");
    const [middlename, setMiddleName] = useState("");
    const [lastname, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
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
      
    const handleClick = async (e)=> {
        e.preventDefault()
        try {
            await Axios.post('http://localhost:3001/signup', {
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                mail: mail, 
                password: password,
            })
            navigate('/')
        }
        catch(err) {
            console.log(err)
        }
    }
      
        
    // const signup = () => {
    //     Axios.post('http://localhost:3001/signup', { 
    //         firstname: firstname,
    //         middlename: middlename,
    //         lastname: lastname,
    //         mail: mail, 
    //         password: password,
    //     }).then((response) => {
    //         if (response.data.message) {
    //             setMessage(response.data.message)
    //             window.location = '/login'
    //             console.log(message)
    //         }
    //     })
    // }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <h2>Sign Up</h2>
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
                            setLastName(e.target.value)
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
                    <input type="submit" id="submit" onClick={handleClick} value="Sign Up"/>
                    <p><a href="/login">Log In</a></p>
            </header>
        </div>
        </>
    );
}

export default SignUp