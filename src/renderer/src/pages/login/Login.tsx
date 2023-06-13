import LoginForm from './LoginForm'
import { test } from '@renderer/assets'

const Login = () => {
  return (
    <div className=" relative flex h-screen items-center justify-end bg-black overflow-hidden  ">
      <video className=" ml-auto  w-screen" autoPlay loop muted>
        <source src={test} type="video/mp4" />
      </video>

      <div className="absolute flex h-full w-2/5 flex-col items-center justify-between gap-4 bg-black/50 p-4 text-yellow-500 backdrop-blur-sm transition  focus-within:bg-black/80">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
