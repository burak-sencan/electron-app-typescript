import { RootState } from '@renderer/app/store'
import { login, onChange } from '@renderer/features/authSlice'
import { FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { password, isLogged } = useSelector((state: RootState) => state.auth)

  const handlelogin = (e: FormEvent) => {
    e.preventDefault()
    dispatch(login())
  }
  useEffect(() => {
    if (isLogged) {
      navigate('/home')
    }
  }, [isLogged])

  return (
    <>
      <form
        className="flex flex-col  grow gap-8 w-1/2 items-center justify-center space-y-6"
        onSubmit={handlelogin}
      >
        <h2 className="text-3xl font-extrabold">Sign In</h2>
        <input
          className="w-full bg-slate-200 p-2 rounded-sm text-center focus:outline-none"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => dispatch(onChange(e.target.value))}
        />
        <button
          className="w-2/3 p-2 border border-yellow-400 rounded-md hover:bg-yellow-500/20 transition"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="self-end flex justify-between w-full">
        <p className="self-end text-sm">Version 1.0.0</p>
        <p className="self-start">USB Not Valid !</p>
      </div>
    </>
  )
}
export default LoginForm
