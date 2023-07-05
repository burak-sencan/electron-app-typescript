import { RootState } from '@renderer/app/store'
import { t } from 'i18next'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const StatusBar = () => {
  const [connectionStatus, setConnectionStatus] = useState(false)
  const { selectedMethod } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    window.electron.connectionStatus((value) => {
      setConnectionStatus(value)
    })
  }, [])

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return (
    <div className="flex items-center gap-32 bg-yellow-400 px-4  text-sm ">
      <p className="shadow ">
        Status:
        {connectionStatus ? (
          <span className="text-lime-500">Online</span>
        ) : (
          <span className="text-red-500">Offline</span>
        )}
      </p>

      {selectedMethod?.general?.name?.val === undefined ? (
        <p>No selected Method</p>
      ) : (
        <p>{selectedMethod?.general?.name?.val}</p>
      )}

      <p className="flex gap-2 shadow">
        <span>{time.toLocaleTimeString()}</span>
        <span>{time.toLocaleDateString()}</span>
      </p>
      <p className="shadow">{t('version')} 1.0.0</p>
    </div>
  )
}
export default StatusBar
