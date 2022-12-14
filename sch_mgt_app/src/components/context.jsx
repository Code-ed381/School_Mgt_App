import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// const UserContext = createContext()

const useAuth = ()=> {
    const user = localStorage.getItem('user');

    if (user) {
        return true;
    }
    else {
        return false
    }
}

const ProtectedRoute = (props) => {
    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     setUser(window.localStorage.getItem('user'))

    //     auth()
    // })

    const auth = useAuth()

    return (auth?<Outlet/>: <Navigate to='/login'/>)
}


export default ProtectedRoute;
