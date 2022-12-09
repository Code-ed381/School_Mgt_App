import { useState, useContext, createContext } from "react";
import { Navigate } from "react-router-dom";
import Axios from "axios";

const UserContext = createContext()

const Login = ({ children })=> {
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
            window.location = '/home'
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
                    id: res.data[0].id,
                    username: res.data[0].username,
                    roles: res.data[0].isAdmin
                })
                window.location = '/admin'
            }
            catch (err) {
                console.log(err)
            }
        })

        return (
            <UserContext.Provider value={user}>{ children }</UserContext.Provider>
        )
        
    }
    
    const viewUser = ()=> {
        alert(JSON.stringify(user))
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
                {user ? (<input type="submit" id="logout" onClick={logout} value="Log out"/>): (<input type="submit" id="submit" onClick={handleClick} value="Log in"/>)}
                
                <input type="submit" id="user" onClick={viewUser} value="View user"/>
                <p><a href="/signup">Sign Up</a></p>
                {/* <p><a href="/logout">Log out</a></p> */}
            </header>
        </div>
        </>
    );
}

const useAuth = ()=> {
    return useContext(UserContext)
}

const ProtectedRoute = ({children })=> {
    const { user } = useAuth
    if(!user) {
        console.log(user)
        return <Navigate to='/login'/>
    }
    console.log(user)
    return children
}


export { Login, ProtectedRoute }