import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '@renderer/features/authSlice'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
}
const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}
const Sidebar = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <motion.ul
      className="flex grow-[1] flex-col gap-4 bg-black p-4 text-white"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.li variants={item}>
        <button className="w-full rounded-md bg-slate-800 p-2 transition hover:bg-slate-900">
          FAQ
        </button>
      </motion.li>
      <motion.li variants={item}>
        <button className="w-full rounded-md bg-slate-800 p-2 transition hover:bg-slate-900">
          FAQ
        </button>
      </motion.li>
      <motion.li variants={item}>
        <button className="w-full rounded-md bg-slate-800 p-2 transition hover:bg-slate-900">
          FAQ
        </button>
      </motion.li>
      <motion.li variants={item}>
        <button
          className="w-full rounded-md bg-slate-800 p-2 transition hover:bg-slate-900"
          onClick={handleLogout}
        >
          {t('logout')}
        </button>{' '}
      </motion.li>
    </motion.ul>
  )
}
export default Sidebar
