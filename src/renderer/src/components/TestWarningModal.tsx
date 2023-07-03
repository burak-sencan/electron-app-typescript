import { motion } from 'framer-motion'

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
        className="center h-1/2 w-1/2 flex-col gap-4 rounded-md bg-yellow-400 p-8 text-lg text-black"
      >
        <p>TestWarningModal</p>
        <button
          className="rounded-md border border-black px-4 py-2"
          onClick={() => {
            setShowTestWarningModal(false)
            setDidShowTestWarningModal(true)
          }}
        >
          Ok Go test
        </button>
      </motion.div>
    </motion.div>
  )
}
export default TestWarningModal
