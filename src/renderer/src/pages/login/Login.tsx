import LoginForm from './LoginForm'
import { tesla } from '@renderer/assets'

const Login = () => {
  return (
    <div className="flex gradient h-screen ">
      <div className="w-2/5 flex bg-slate-900/50 backdrop-blur-md p-4 transition focus-within:bg-slate-900/60 h-full flex-col items-center justify-between gap-4  text-yellow-500">
        <LoginForm />
      </div>
      <div className="w-3/5 rounded-lg gap-16 flex justify-center items-center ">
        <div className=" self-start text-center pt-[30%]">
          <h1 className="font-extrabold tracking-[2rem] mb-3 sm:text-4xl lg:text-6xl font-mono	">
            TESLA
          </h1>
          <h2 className="font-extrabold tracking-[0.4rem] sm:text-xl lg:text-2xl font-mono">
            Universal Test Cihazları
          </h2>
        </div>
        {/* <img className="h-[70%]" src={tesla} alt="tesla" /> */}
      </div>
    </div>
  )
}

export default Login
