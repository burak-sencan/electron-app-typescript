import { useEffect, useState } from 'react'
import Appearance from './settingsTabs/Appearance'
import General from './settingsTabs/General'
import { useDispatch } from 'react-redux'
import { changed, creaeteUnsavedTempSettings } from '@renderer/features/userSettingSlice'

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
      <div className="flex flex-col gap-4 p-4 shadow">
        <button
          className={activeTab === 0 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(0)}
        >
          General
        </button>
        <button
          className={activeTab === 1 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(1)}
        >
          Appearance
        </button>
        <button
          className={activeTab === 2 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(2)}
        >
          elma
        </button>
        <button
          className={activeTab === 3 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(3)}
        >
          elma
        </button>
      </div>
      {activeTab === 0 ? (
        <General />
      ) : activeTab === 1 ? (
        <Appearance />
      ) : activeTab === 2 ? (
        <p>Elma</p>
      ) : activeTab === 3 ? (
        <p>Elma</p>
      ) : null}
    </div>
  )
}
export default Settings
