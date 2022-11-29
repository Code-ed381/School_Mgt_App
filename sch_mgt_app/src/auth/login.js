import { useNavigate, useLocation } from "react-router-dom";
import useAuth from './auth'

const Login = ()=> {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation()

    const handleLogin = ()=> {
        login().then(()=> {
            navigate(state?.path || '/')
        })
    }

    return handleLogin
}

export default Login