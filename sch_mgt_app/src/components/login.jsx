import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import $ from "jquery";

function Login() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAllData = async ()=> {
            try {
                const res = await Axios.get('http://localhost:3001/todos')
                setData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllData()
    }, []);

    const handleDelete = async (id)=> {
        try{
            await Axios.delete('http://localhost:3001/todos/'+id)
            window.location.reload()
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1>Items</h1>
            <div className="todos">
                {data.map((todo) => {
                    return(
                    <div className="items" key={todo.id}>
                        <h3>{todo.item}</h3>
                        <button onClick={()=> handleDelete(todo.id)}>delete</button>
                    </div>
                    )
                })}
            </div>
            <buttton>
                <Link to="/addtask">Add task</Link>
            </buttton>
        </>
    );
}


export default Login