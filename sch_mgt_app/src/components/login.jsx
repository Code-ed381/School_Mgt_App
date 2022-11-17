import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
// import $ from "jquery";

function Login() {
    const [data, setData] = useState([]);

    // const navigate = useNavigate() 

    // useEffect(() => {
    //     const fetchAllData = async ()=> {
    //         try {
    //             const res = await Axios.get('http://localhost:3001/login/students')
    //             setData(res.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchAllData()
    // }, []);

    //Get the values from the database using ajax
    const handleClick = async (e)=> {
        e.preventDefault()
        try {
            const res = await Axios.get('http://localhost:3001/login/students')
            setData(res.data)
            const dattta = res.data
            dattta.map((item)=> {setData(item)})
            console.log(dattta[1].email)
        }
        catch(err) {
            console.log(err)
        }
    }

    
    ///// Delete ajax request for todo
    // const handleDelete = async (id)=> {
    //     try{
    //         await Axios.delete('http://localhost:3001/todos/'+id)
    //         window.location.reload()
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <h2>Login</h2>
                    <input 
                        type="mail" 
                        name="mail" 
                        placeholder="Enter your email" 
                        // onChange={(e) => { 
                        //     setMail(e.target.value)
                        // }}
                    /><br />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        // onChange={(e) => { 
                        //     setPassword(e.target.value)
                        // }}
                    /><br />
                    <input type="submit" id="submit" onClick={handleClick} value="Log in"/>
                    <p><a href="/login">Sign Up</a></p>
                    <p><a href="/logout">Log In</a></p>
            </header>
        </div>
        </>
    );
}


export default Login