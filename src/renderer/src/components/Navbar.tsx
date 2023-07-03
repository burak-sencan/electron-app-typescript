import { RootState } from '@renderer/app/store'
import { stop, update } from '@renderer/features/chartSlice'
import { completeTest } from '@renderer/features/testSlice'
import { saveSettings } from '@renderer/features/userSettingSlice'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import LiveDisplay from './LiveDisplay'
import TestWarningModal from './TestWarningModal'

const Navbar = () => {
  const location = useLocation()

  const dispatch = useDispatch()
  const { speciments } = useSelector((state: RootState) => state.speciments)
  const { isChanged, unsavedTempSetting } = useSelector((state: RootState) => state.setting)
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
  const { i18n } = useTranslation()
  const [showTestWarningModal, setShowTestWarningModal] = useState<boolean>(false)
  const [didShowTestWarningModal, setDidShowTestWarningModal] = useState<boolean>(false)

  const addRandomData = () => {
    const newLoad = time * 2 + Math.floor(Math.random() * 50)
    const newElengation = Math.floor(Math.random() * 10)
    dispatch(update({ time: time, load: newLoad, elengation: newElengation }))
  }

  const handleStart = () => {
    if (!didShowTestWarningModal) {
      setShowTestWarningModal(true)
    } else {
      setTime(0)
      dispatch(stop())
      let newIntervalId = setInterval(() => {
        setTime((time) => time + 1)
      }, 20)

      setIntervalId(newIntervalId)
    }
  }

  // Stopping the interval
  const handleStop = () => {
    clearInterval(intervalId)
    setShowTestWarningModal(false)
    setDidShowTestWarningModal(false)
  }

  const saveTest = async (speciments) => {
    const result = await window.electron.complateTest(speciments)
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
    <div className="flex items-center bg-slate-900 p-4 shadow">
      <div>
        <Link className="center rounded-md border  bg-slate-50 p-2" to="/dashboard/home">
          Home
        </Link>
      </div>
      <LiveDisplay />

      {location.pathname === '/dashboard/test' && (
        <div className="flex gap-4 text-white">
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
          {showTestWarningModal && (
            <TestWarningModal
              setShowTestWarningModal={setShowTestWarningModal}
              setDidShowTestWarningModal={setDidShowTestWarningModal}
            />
          )}
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
