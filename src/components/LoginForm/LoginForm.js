import React,{useState} from 'react'
import { loginSuccess } from '../../actions/action'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect,setRedirect]=useState(false)

    const dispatch=useDispatch();

    const handleLogin=()=>{
        const user={
            username,
            password,
        }
        dispatch(loginSuccess(user))
        setRedirect(true)
    }

    if(redirect){
        return <Navigate to="/main" />
    }

  return (
    <div className='login-container'>
        <h1>Login Form</h1>
        <form>
            <div className='username-container'>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
                />
            </div>
            <div className='password-container'>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                />
            </div>
            <button type="button" onClick={handleLogin} >
            Login
            </button>
        </form>
    </div>
  )
}

export default LoginForm

