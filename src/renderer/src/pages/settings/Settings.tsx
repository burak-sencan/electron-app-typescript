import { useEffect, useState } from 'react'
import Appearance from './settingsTabs/Appearance'
import General from './settingsTabs/General'
import { useDispatch } from 'react-redux'
import { changed, creaeteUnsavedTempSettings } from '@renderer/features/userSettingSlice'
import Calibration from '@renderer/components/Calibration'

const Settings = () => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (index) => {
    setActiveTab(index)
  }

  useEffect(() => {
    dispatch(creaeteUnsavedTempSettings())
    dispatch(changed())
  }, [])

  return (
    <div className="flex h-full gap-4 ">
      <div className="flex w-48 shrink-0 flex-col bg-slate-50 shadow-lg">
        <button
          className={`${
            activeTab === 0 ? 'bg-slate-200' : ''
          } border-b border-black/20 p-4 transition hover:bg-slate-200`}
          onClick={() => handleTabChange(0)}
        >
          General
        </button>
        <button
          className={`${
            activeTab === 1 ? 'bg-slate-200' : ''
          } border-b border-black/20 p-4 transition hover:bg-slate-200`}
          onClick={() => handleTabChange(1)}
        >
          Appearance
        </button>
        <button
          className={`${
            activeTab === 2 ? 'bg-slate-200' : ''
          } border-b border-black/20 p-4 transition hover:bg-slate-200`}
          onClick={() => handleTabChange(2)}
        >
          Calibration
        </button>
        <button
          className={`${
            activeTab === 3 ? 'bg-slate-200' : ''
          } border-b border-black/20 p-4 transition hover:bg-slate-200`}
          onClick={() => handleTabChange(3)}
        >
          Connection
        </button>
        <button
          className={`${
            activeTab === 4 ? 'bg-slate-200' : ''
          } border-b border-black/20 p-4 transition hover:bg-slate-200`}
          onClick={() => handleTabChange(4)}
        >
          Admin
        </button>
        <button
          className={`${
            activeTab === 5 ? 'bg-slate-200' : ''
          } border-b p-4 transition hover:bg-slate-200`}
          onClick={() => handleTabChange(5)}
        >
          Operator
        </button>
      </div>
      {activeTab === 0 ? (
        <General />
      ) : activeTab === 1 ? (
        <Appearance />
      ) : activeTab === 2 ? (
        <Calibration />
      ) : activeTab === 3 ? (
        <p className="p-4">Test</p>
      ) : null}
    </div>
  )
}
export default Settings
