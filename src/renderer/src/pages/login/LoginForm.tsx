import { useState } from 'react'
import { RootState } from '@renderer/app/store'
import { login, onChange } from '@renderer/features/authSlice'
import { FormEvent, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { password, isLogged } = useSelector((state: RootState) => state.auth)
  const [isError, setIsError] = useState(false)

  const handlelogin = async (e: FormEvent) => {
    e.preventDefault()
    const result = await window.electron.login(password)
    if (result.status) dispatch(login())
    else {
      console.log(result.message)
      setIsError(!result.status)
    }
  }
  useEffect(() => {
    if (isLogged) {
      navigate('/dashboard/home')
    }
  }, [isLogged])

  return (
    <>
      <form
        className="flex  grow flex-col items-center justify-center gap-16 space-y-6"
        onSubmit={handlelogin}
      >
        <h2 className="text-3xl font-extrabold">{t('welcome')}</h2>
        <input
          className="w-full rounded-sm border bg-inherit bg-slate-200 p-2 text-center focus:outline-none"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onFocus={() => {
            setIsError(false)
          }}
          onChange={(e) => dispatch(onChange(e.target.value))}
        />

        <div className="flex w-full flex-col items-center gap-4">
          {isError && <p>{t('loginErrorMessage')}</p>}
          <button
            className=" w-2/3 rounded-sm border border-yellow-400 p-2 transition hover:bg-yellow-500/20"
            type="submit"
          >
            {t('login')}
          </button>
        </div>
      </form>
      <div className="flex w-full justify-between self-end">
        <p className="self-end text-sm">{t('version')} 1.0.0</p>
        <p className="self-start">{t('usbInfo')}</p>
      </div>
    </>
  )
}
export default LoginForm
