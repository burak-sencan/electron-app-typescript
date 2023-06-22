import { useEffect, useState } from 'react'

const LiveDisplay = () => {
  const [loadData, setLoadData] = useState<number>()
  const [elengation, setElengation] = useState<number>()

  const readDWord = (x, y) => {
    const low = x.toString(2)
    const high = y.toString(2)
    const binaryVal = high + low
    return parseInt(binaryVal, 2)
  }

  useEffect(() => {
    ////modbus//
    window.electron.connect()

    window.electron.subscribeLoadcell((value) => {
      setLoadData(value)
      console.log(value.data)
      setLoadData(readDWord(value.data[0], value.data[1]))
      setElengation(readDWord(value.data[2], value.data[3]))
      console.log(value.data[2], value.data[3])
    })

    return () => {
      window.electron.disconnect()
    }
  }, [])

  return (
    <div className="flex grow justify-center gap-4">
      <div className="center  rounded-md bg-yellow-400 py-4 text-xl">
        {loadData !== undefined ? loadData : 'No data'}
      </div>
      <div className="center  rounded-md bg-yellow-400 py-4 text-xl">
        {elengation !== undefined ? elengation : 'No data'}
      </div>
      {/* <div className="center w- rounded-md bg-yellow-400 py-4 text-xl">{'No data'}</div> */}
    </div>
  )
}
export default LiveDisplay
