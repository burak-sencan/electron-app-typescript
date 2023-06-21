import { useEffect, useState } from 'react'

const LiveDisplay = () => {
  const [loadData, setLoadData] = useState({ data: [], buffer: [] })
  const [elengation, setElengation] = useState({ data: [], buffer: [] })

  useEffect(() => {
    ////modbus//
    window.electron.connect()

    window.electron.subscribeLoadcell((value) => {
      setLoadData(value)
    })
    window.electron.subscribeElengation((value) => {
      setElengation(value)
    })

    return () => {
      window.electron.disconnect()
    }
  }, [])

  return (
    <div className="flex grow justify-center gap-4">
      <div className="center w-1/12 rounded-md bg-yellow-400 py-4 text-xl">
        {loadData?.data[0] ? loadData?.data[0] : 'No data'}
      </div>
      <div className="center w-1/12 rounded-md bg-yellow-400 py-4 text-xl">
        {elengation?.data[0] ? elengation?.data[0] : 'No data'}
      </div>
      <div className="center w-1/12 rounded-md bg-yellow-400 py-4 text-xl">
        {'No data'}
      </div>
    </div>
  )
}
export default LiveDisplay
