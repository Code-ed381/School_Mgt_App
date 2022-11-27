import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Login() {
    // const [data, setData] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    //Get the values from the database using ajax
    const navigate = useNavigate() 

    const logout = async (e)=>  {
        e.preventDefault()

        Axios.get('http://localhost:3001/logout')
        .then((res)=>{
            setMessage(res.data.message)
            window.location = '/login'
        })
    }

    const handleClick = async (e)=> {
        e.preventDefault()

        
        Axios.post('http://localhost:3001/login/password', {
            username: mail,
            password: password
        }).then((res)=> {
            setMessage(res.data.message)
        })
        

        

        // try {
        //     const res = await Axios.get('http://localhost:3001/login-success')
        //     setMessage(res.data.message)
        //     navigate('/login')        
        // }
        // catch(err) {
        //     console.log(err)
        // }

        // try {
        //     const res = await Axios.get('http://localhost:3001/login-failure')
        //     setMessage(res.data.message)
        
        // }
        // catch(err) {
        //     console.log(err)
        // }

        /* Authentication in the front */
        // try {
        //     const res = await Axios.get('http://localhost:3001/login/password')
        //     setData(res.data)

        //     let email_list = []
        //     let pass_list = []
        //     for(var i = 0; i < data.length; i++) {
        //         email_list.push(data[i].email)
        //         pass_list.push(data[i].password)
        //     }

        //     if (email_list.includes(mail) && pass_list.includes(password)) {
        //         setMessage("Successfully logged in")
        //         setTimeout(() => {
        //             navigate('/')
        //         }, 2000);
        //     }
        //     else {
        //         setMessage('Incorrect Email or Password')
        //         setTimeout(() => {
        //             navigate(0)
        //         }, 2000);
        //     }
        // }
        // catch(err) {
        //     console.log(err)
        // }
    }

    return (
        <>
        <div className="App">
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
                <input type="submit" id="submit" onClick={handleClick} value="Log in"/>
                <input type="submit" id="logout" onClick={logout} value="Log out"/>
                <p><a href="/signup">Sign Up</a></p>
                {/* <p><a href="/logout">Log out</a></p> */}
            </header>
        </div>
        </>
    );
}


export default Login