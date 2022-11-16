import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Home() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

const [task, setTask] = useState([]);

const navigate = useNavigate()

const handleChange = (e) => {
  setTask(e.target.value)
}

const handleClick = async (e)=> {
  e.preventDefault()
  try {
    await Axios.post('http://localhost:3001/addtask', {task: task})
    navigate('/addtask')
  }
  catch(err) {
    console.log(err)
  }
}

  return (
    <>
    <div>
      <header>
        {/* <h5>{data}</h5> */}
        <h2>Enter your task</h2>
        <input 
          type="text" 
          placeholder='Enter your task'                         
          onChange={handleChange}
          name='items'
        />
        <input type="submit" onClick={handleClick} value='Add' />
      </header>
    </div>
    </>
  );
}

export default Home;