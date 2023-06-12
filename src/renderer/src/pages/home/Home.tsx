import { logout } from '@renderer/features/authSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-end p-2">
        <button onClick={handleLogout}> {t('logout')}</button>
      </div>

      <div className="flex gap-4 p-4">
        <Link className="center h-32 w-32 rounded-md border bg-slate-50" to="/dashboard/home-test">
          Test
        </Link>
        <Link
          className="center h-32 w-32 rounded-md border bg-slate-50"
          to="/dashboard/home-methods"
        >
          Methods
        </Link>
        <Link className="center h-32 w-32 rounded-md border bg-slate-50" to="/dashboard/results">
          Results
        </Link>
        <Link className="center h-32 w-32 rounded-md border bg-slate-50" to="/dashboard/settings">
          Settings
        </Link>
      </div>
    </div>
  )
}
export default Home
