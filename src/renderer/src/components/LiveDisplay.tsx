import { useEffect, useState } from 'react'

const LiveDisplay = () => {
  const [data, setData] = useState({ data: [], buffer: [] })

  useEffect(() => {
    ////modbus//
    window.electron.connect()

    window.electron.subscribe((value) => {
      setData(value)
    })

    return () => {
      window.electron.disconnect()
    }
  }, [])

  return (
    <div className="flex grow justify-center gap-4">
      <div className="center w-1/12 rounded-md bg-yellow-400 py-4 text-xl">{data?.data[0]} Val</div>
      <div className="center w-1/12 rounded-md bg-yellow-400 py-4 text-xl">{data?.data[0]} Val</div>
      <div className="center w-1/12 rounded-md bg-yellow-400 py-4 text-xl">{data?.data[0]} Val</div>
    </div>
  )
}
export default LiveDisplay
