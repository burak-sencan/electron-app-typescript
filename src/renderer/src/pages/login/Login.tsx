import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className="flex h-screen flex-col">
      <Link to="/home">GotoHome</Link>
      <LoginForm />
    </div>
  )
}

export default Login
