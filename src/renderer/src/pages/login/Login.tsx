import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className="gradient flex h-screen ">
      <div className="flex h-full w-2/5 flex-col items-center justify-between gap-4 bg-slate-900/50 p-4 text-yellow-500 backdrop-blur-md transition  focus-within:bg-slate-900/60">
        <LoginForm />
      </div>
      <div className="flex w-3/5 items-center justify-center gap-16 rounded-lg ">
        <div className=" self-start pt-[30%] text-center">
          <h1 className="mb-3 font-mono font-extrabold tracking-[2rem] sm:text-4xl lg:text-6xl	">
            TESLA
          </h1>
          <h2 className="font-mono font-extrabold tracking-[0.4rem] sm:text-xl lg:text-2xl">
            Universal Test Cihazları
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Login
