import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useCycle } from 'framer-motion'
import { BsClipboardData } from 'react-icons/bs'
import { vector } from '@renderer/assets'
import { useRef } from 'react'
import { Navigation } from './Navigation'
import { MenuToggle } from './MenuToggle'
import { useDimensions } from './use-dimensions'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    x: 0,
    opacity: 1
  }
}

const Home = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }
  return (
    <div className="flex h-full justify-between overflow-hidden">
      <div className="flex w-full gap-32 ">
        <div className="home-gradient flex h-full w-2/5">
          <motion.nav
            className="nav w-2/5"
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            ref={containerRef}
            custom={height}
          >
            <motion.div
              className="absolute bottom-0 left-0 top-0 w-full bg-yellow-300/80 backdrop-blur-sm"
              variants={sidebar}
            />
            <MenuToggle toggle={() => toggleOpen()} />
            <Navigation />
          </motion.nav>

          <img
            src={vector}
            alt="logo"
            className="pointer-events-none mx-auto h-80 w-80 self-center object-contain p-4 "
          />
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
    </div>
  )
}
export default Home

const MotionLink = ({ text, url, transition }) => {
  const { t } = useTranslation()
  return (
    <motion.li variants={item}>
      <Link
        className={`${transition} center h-28 w-28  flex-col gap-2 rounded-full shadow-xl transition hover:bg-slate-50 xl:h-32  xl:w-32 2xl:h-44 2xl:w-44`}
        to={url}
      >
        <BsClipboardData className="text-3xl text-yellow-400" />
        {t(text)}
      </Link>
    </motion.li>
  )
}
