import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { logout } from '@renderer/features/authSlice'
import { AiOutlineLogout } from 'react-icons/ai'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}
const variantsli = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const Navigation = ({ isOpen }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <motion.ul
      className={`${!isOpen && 'pointer-events-none'} absolute top-24 w-full px-16`}
      variants={variants}
    >
      <motion.li
        variants={variantsli}
        className="linav flex items-center px-4 py-2  text-[#FF008C]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="center mr-6 h-12 w-12 rounded-full border-2 border-[#FF008C] text-3xl">
          <AiOutlineLogout />
        </div>
        <button
          className="max-w-[24rem] grow rounded-md border-2 border-[#FF008C] py-1 "
          onClick={handleLogout}
        >
          {t('logout')}
        </button>
      </motion.li>
      <motion.li
        variants={variantsli}
        className="linav flex items-center px-4 py-2  text-[#D309E1]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="center mr-6 h-12 w-12 rounded-full border-2 border-[#D309E1] text-3xl">
          <AiOutlineLogout />
        </div>
        <button className="max-w-[24rem] grow rounded-md border-2 border-[#D309E1] py-1 ">
          FAQ
        </button>
      </motion.li>
      <motion.li
        variants={variantsli}
        className="linav flex items-center px-4 py-2  text-[#9C1AFF]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="center mr-6 h-12 w-12 rounded-full border-2 border-[#9C1AFF] text-3xl">
          <AiOutlineLogout />
        </div>
        <button className="max-w-[24rem] grow rounded-md border-2 border-[#9C1AFF] py-1 ">
          FAQ
        </button>
      </motion.li>
      <motion.li
        variants={variantsli}
        className="linav flex items-center px-4 py-2  text-[#7700FF]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="center mr-6 h-12 w-12 rounded-full border-2 border-[#7700FF] text-3xl">
          <AiOutlineLogout />
        </div>
        <button className="max-w-[24rem] grow rounded-md border-2 border-[#7700FF] py-1 ">
          FAQ
        </button>
      </motion.li>
      <motion.li
        variants={variantsli}
        className="linav flex items-center px-4 py-2  text-[#4400FF]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="center mr-6 h-12 w-12 rounded-full border-2 border-[#4400FF] text-3xl">
          <AiOutlineLogout />
        </div>
        <button className="max-w-[24rem] grow rounded-md border-2 border-[#4400FF] py-1 ">
          FAQ
        </button>
      </motion.li>
    </motion.ul>
  )
}
