import { useNavigate } from "react-router-dom";
import useAuth from './auth'

const Logout = ()=> {
    const navigate = useNavigate();
    const { authed, logout  } = useAuth()

    const handleLogout = ()=> {
        logout();
        navigate("/")
        return authed
    }

    return handleLogout
}

export default Logout