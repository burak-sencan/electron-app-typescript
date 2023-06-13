import { logout } from '@renderer/features/authSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BsClipboardData } from 'react-icons/bs'
import { vector } from '@renderer/assets'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    x: 0,
    opacity: 1
  }
}

const Home = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="flex h-full justify-between overflow-hidden">
      <div className="flex w-full gap-32">
        <div className="center h-full w-2/5 bg-black">
          <img src={vector} alt="logo" className="h-80 w-80  object-contain p-4 " />
        </div>
        <motion.ul
          className="flex flex-col justify-center gap-2 2xl:gap-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <MotionLink text={'test'} url={'/dashboard/home-test'} transition={'translate-x-8'} />
          <MotionLink
            text={'methods'}
            url={'/dashboard/home-methods'}
            transition={'translate-x-48 -translate-y-4'}
          />
          <MotionLink
            text={'results'}
            url={'/dashboard/results'}
            transition={'translate-x-48 translate-y-4'}
          />
          <MotionLink text={'settings'} url={'/dashboard/settings'} transition={'translate-x-8'} />
        </motion.ul>
      </div>

      <div className="flex flex-col gap-4 bg-slate-50 p-2">
        <button className="h-12 w-12 rounded-full bg-slate-200 p-2 shadow-sm">User</button>
        <button className="rounded-md bg-slate-200 p-2 shadow-sm">FAQ</button>

        <button className="rounded-md bg-slate-200 p-2 shadow-sm" onClick={handleLogout}>
          {t('logout')}
        </button>
      </div>
    </div>
  )
}
export default Home

const MotionLink = ({ text, url, transition }) => {
  const { t } = useTranslation()
  return (
    <motion.li variants={item} className="">
      <Link
        className={`${transition} center h-28  w-28 flex-col rounded-full shadow-xl transition hover:bg-slate-50 xl:h-32  xl:w-32 2xl:h-44 2xl:w-44`}
        to={url}
      >
        <BsClipboardData className="text-2xl text-yellow-400" />
        {t(text)}
      </Link>
    </motion.li>
  )
}
