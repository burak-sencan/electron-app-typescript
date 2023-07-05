import { motion } from 'framer-motion'
import { CiWarning } from 'react-icons/ci'

const TestWarningModal = ({ setShowTestWarningModal, setDidShowTestWarningModal }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,

      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="center absolute left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 !transform bg-black/40"
    >
      <motion.div
        variants={item}
        className="flex h-1/2 w-1/2 flex-col gap-4 rounded-md bg-yellow-300/80 p-8 text-lg text-black backdrop-blur-sm"
      >
        <div className="flex items-center gap-8">
          <CiWarning className="text-6xl text-red-600" />
          <div>
            <h1 className="text-2xl">Limit switch warning</h1>
            <p>Check device upper and lower limits</p>
          </div>
        </div>

        <button
          className="md mt-auto rounded-md bg-lime-400 px-4 py-2 shadow-lg transition hover:bg-lime-400/80"
          onClick={() => {
            setShowTestWarningModal(false)
            setDidShowTestWarningModal(true)
          }}
        >
          Ok Got It
        </button>
      </motion.div>
    </motion.div>
  )
}
export default TestWarningModal
