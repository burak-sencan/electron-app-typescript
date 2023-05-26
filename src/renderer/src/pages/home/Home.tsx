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
    <div className="flex justify-between">
      <Link to="/">GotoLogin</Link>
      <button onClick={handleLogout}> {t('logout')}</button>
    </div>
  )
}
export default Home
