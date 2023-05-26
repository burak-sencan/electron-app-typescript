
import { RootState } from '@renderer/app/store'
import { login, onChange } from '@renderer/features/authSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { password, isLogged } = useSelector((state: RootState) => state.auth)

  const handlelogin = () => {
    dispatch(login())
  }
  useEffect(() => {
    if (isLogged) {
      navigate('/home')
    }
  }, [isLogged])

  return (
    <div className="flex grow flex-col items-center justify-center gap-4 bg-gray-50 py-12">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign up
      </h2>

      <div className="w-2/3 bg-white  px-8 py-10 shadow lg:w-1/3 ">
        <form className="flex h-full flex-col  items-center justify-center space-y-6">
          <input
            className="w-full bg-slate-50 p-4 text-center focus:outline-none"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(onChange(e.target.value))}
          />
          <button
            className="w-1/3 p-2 shadow"
            type="button"
            onClick={handlelogin}
          >
            Login
          </button>
          <p className="self-end text-lime-400">usb valid!</p>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
