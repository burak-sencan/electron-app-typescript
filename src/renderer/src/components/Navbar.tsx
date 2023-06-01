import { stop, update } from '@renderer/features/chartSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()

  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()

  const addRandomData = () => {
    const newLoad = time * 2 + Math.floor(Math.random() * 50)
    const newElengation = Math.floor(Math.random() * 10)

    dispatch(update({ time: time, load: newLoad, elengation: newElengation }))
  }

  const handleStart = () => {
    setTime(0)
    dispatch(stop())
    let newIntervalId = setInterval(() => {
      setTime((time) => time + 1)
    }, 20)

    setIntervalId(newIntervalId)
  }

  // Stopping the interval
  const handleStop = () => {
    clearInterval(intervalId)
  }

  useEffect(() => {
    if (time > 0) {
      addRandomData()
    }
  }, [time])

  return (
    <div className="flex items-center justify-between  bg-slate-100 p-4">
      <div>
        <Link className="center rounded-md border bg-slate-50 p-2" to="/home">
          Home
        </Link>
      </div>
      <div className="flex gap-4">
        <button className="rounded-md border p-2" onClick={handleStart}>
          Start
        </button>
        <button className="rounded-md border p-2" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  )
}
export default Navbar
