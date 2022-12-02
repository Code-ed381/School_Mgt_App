import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import App from '../App'
import Axios from "axios";

export const UserContext = createContext()

function Login() {
    const [user, setUser] = useState(null);
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
            setUser()
        })
    }

    const handleClick = async (e)=> {
        e.preventDefault()

        Axios.post('http://localhost:3001/login/password', {
            username: mail,
            password: password
        })
        .then((res)=> {
            try {
                setUser({
                    username: mail,
                    password: password,
                    persmissions: ['analyze'],
                    roles: ['admin']
                })
                console.log(res)
                
                
            }
            catch (err) {
                console.log(err)
            }
        })
    }
    
    const viewUser = ()=> {
        console.log(user)
    }

    return (
        <UserContext.Provider value={user}>
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
                    {user ? (<input type="submit" id="logout" onClick={logout} value="Log out"/>): (<input type="submit" id="submit" onClick={handleClick} value="Log in"/>)}
                    
                    <input type="submit" id="user" onClick={viewUser} value="View"/>
                    <p><a href="/signup">Sign Up</a></p>
                    {/* <p><a href="/logout">Log out</a></p> */}
                </header>
            </div>
            </>
        </UserContext.Provider>
    );
}


export default Login