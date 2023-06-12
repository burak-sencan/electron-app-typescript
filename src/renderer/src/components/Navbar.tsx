import { RootState } from '@renderer/app/store'
import { stop, update } from '@renderer/features/chartSlice'
import { completeTest } from '@renderer/features/testSlice'
import { saveSettings } from '@renderer/features/userSettingSlice'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const dispatch = useDispatch()
  const { speciments } = useSelector((state: RootState) => state.speciments)
  const { isChanged, unsavedTempSetting } = useSelector((state: RootState) => state.setting)
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
  const { i18n } = useTranslation()

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

  const saveTest = async (speciments) => {
    const result = await window.electron.openFile(speciments)
    console.log(result)
  }
  const handleSaveSettings = async () => {
    dispatch(saveSettings(unsavedTempSetting))
    //i18n
    i18n.changeLanguage(unsavedTempSetting.language)

    const result = await window.electron.saveSettings(unsavedTempSetting)
    console.log(result)
  }

  useEffect(() => {
    if (time > 0) {
      addRandomData()
    }
  }, [time])

  return (
    <div className="flex items-center justify-between bg-slate-50  p-4">
      <div>
        <Link className="center rounded-md border bg-slate-50 p-2" to="/home">
          Home
        </Link>
      </div>
      {location.pathname === '/dashboard/test' && (
        <div className="flex gap-4">
          <button className="rounded-md border p-2" onClick={handleStart}>
            Start
          </button>
          <button className="rounded-md border p-2" onClick={handleStop}>
            Stop
          </button>
          <button
            className="rounded-md border p-2"
            onClick={() => {
              dispatch(completeTest(speciments))
              saveTest(speciments)
            }}
          >
            Complate Test
          </button>
        </div>
      )}
      {location.pathname === '/dashboard/settings' && (
        <div className="flex gap-4">
          <button
            className={`${
              isChanged === true ? 'bg-lime-400' : 'bg-white'
            } rounded-md border px-2 py-1`}
            disabled={!isChanged}
            onClick={handleSaveSettings}
          >
            Save Settings
          </button>
        </div>
      )}
    </div>
  )
}
export default Navbar
