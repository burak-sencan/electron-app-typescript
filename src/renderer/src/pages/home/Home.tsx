import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Sidebar from '@renderer/components/sidebar'

// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.25,
//       staggerChildren: 0.15
//     }
//   }
// }

// const item = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     x: 0,
//     opacity: 1
//   }
// }

// const Home = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true)

//   const containerRef = useRef(null)
//   const { height } = useDimensions(containerRef)

//   const sidebar = {
//     open: () => ({
//       clipPath: `circle(${height * 1.2}px at 40px 40px)`,
//       transition: {
//         type: 'spring',
//         stiffness: 40,
//         restDelta: 2
//       }
//     }),
//     closed: {
//       clipPath: 'circle(30px at 40px 40px)',
//       transition: {
//         delay: 0.5,
//         type: 'spring',
//         stiffness: 400,
//         damping: 40
//       }
//     }
//   }
//   return (
//     <div className="flex h-full justify-between overflow-hidden">
//       <div className="flex w-full gap-28 ">
//         <div className="home-gradient flex h-full w-2/5">
//           <motion.nav
//             className=" absolute bottom-0 left-0 top-0 w-2/5 overflow-hidden"
//             initial={false}
//             animate={isOpen ? 'open' : 'closed'}
//             ref={containerRef}
//             custom={height}
//           >
//             <motion.div
//               className="absolute bottom-0 left-0 top-0 w-full bg-yellow-300/75 backdrop-blur-sm"
//               variants={sidebar}
//             />
//             <MenuToggle toggle={() => toggleOpen()} />
//             <Navigation isOpen={isOpen} />
//           </motion.nav>

//           <img
//             src={vector}
//             alt="logo"
//             className="pointer-events-none mx-auto h-80 w-80 self-center object-contain p-4 "
//           />
//         </div>

//         <motion.ul
//           className="flex grow flex-col justify-center gap-8 2xl:gap-16"
//           variants={container}
//           initial="hidden"
//           animate="visible"
//         >
//           <MotionLink text={'test'} url={'/dashboard/home-test'} transition={'translate-x-8'} />
//           <MotionLink
//             text={'methods'}
//             url={'/dashboard/home-methods'}
//             transition={'translate-x-48 '}
//           />
//           <MotionLink text={'results'} url={'/dashboard/results'} transition={'translate-x-48'} />
//           <MotionLink text={'settings'} url={'/dashboard/settings'} transition={'translate-x-8'} />
//         </motion.ul>
//       </div>
//     </div>
//   )
// }
// export default Home

// const MotionLink = ({ text, url, transition }) => {
//   const { t } = useTranslation()
//   return (
//     <motion.li variants={item}>
//       <Link
//         className={`${transition} center home-gradient h-20  w-48 gap-8 rounded-r-full border text-xl text-yellow-400 shadow-md transition hover:scale-105 hover:shadow-yellow-300 2xl:h-28 2xl:w-96`}
//         to={url}
//       >
//         <BsClipboardData className="text-3xl" />
//         {t(text)}
//       </Link>
//     </motion.li>
//   )
// }

const Home = () => {
  const { t } = useTranslation()

  return (
    <main className="flex h-full w-full">
      {/* <div className="relative flex flex-[1] justify-center  border">
        <div className="absolute left-2 top-2">user</div>
        <div className="flex w-full justify-center gap-8">
          <div className="center w-1/6 rounded-md border p-2">live 1</div>
          <div className="center w-1/6 rounded-md border p-2">live 2</div>
          <div className="center w-1/6 rounded-md border p-2">live 3</div>
        </div>
      </div> */}
      <Sidebar />

      <div className="flex grow-[11] bg-black">
        <Link
          className=" home-test  flex grow  justify-center text-2xl text-white"
          to={'/dashboard/home-test'}
        >
          <div className="center h-1/3 w-full  bg-yellow-400/30 text-4xl shadow-2xl backdrop-blur-sm">
            {t('test')}
          </div>
        </Link>

        <Link
          className="home-result  flex grow  justify-center text-2xl text-white"
          to={'/dashboard/results'}
        >
          <div className=" center h-1/3 w-full bg-yellow-400/30 text-4xl shadow-2xl backdrop-blur-sm">
            {t('results')}
          </div>
        </Link>
        <div className="home-method-setting-wrapper flex  grow flex-col gap-4 ">
          <Link
            className="home-method flex h-2/5 flex-col justify-end text-2xl text-white shadow-2xl"
            to={'/dashboard/home-methods'}
          >
            <div className=" center h-1/3 w-full bg-yellow-400/30 text-4xl shadow-2xl backdrop-blur-sm">
              {t('methods')}
            </div>
          </Link>

          <Link
            to={'/dashboard/settings'}
            className=" home-setting flex h-3/5 flex-col justify-start text-2xl text-white"
          >
            <div className=" center h-1/3 w-full bg-yellow-400/30 text-4xl shadow backdrop-blur-sm">
              {t('settings')}
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
export default Home
