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

  const handlelogin = async (e: FormEvent) => {
    e.preventDefault()
    const result = await window.electron.login(password)
    if (result.status) dispatch(login())
    else console.log(result.message)
  }
  useEffect(() => {
    if (isLogged) {
      navigate('/home')
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
          value={password}
          onChange={(e) => dispatch(onChange(e.target.value))}
        />
        <button
          className="w-2/3 rounded-sm border border-yellow-400 p-2 transition hover:bg-yellow-500/20"
          type="submit"
        >
          {t('login')}
        </button>
      </form>
      <div className="flex w-full justify-between self-end">
        <p className="self-end text-sm">{t('version')} 1.0.0</p>
        <p className="self-start">{t('usbInfo')}</p>
      </div>
    </>
  )
}
export default LoginForm
