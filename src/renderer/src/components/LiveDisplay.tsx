import { RootState } from '@renderer/app/store'
import { setData } from '@renderer/features/liveDataSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LiveDisplay = () => {
  const { settingsState } = useSelector((state: RootState) => state.setting) // Access the counter state from the Redux store

  const [loadData, setLoadData] = useState<number>()
  const [elengation, setElengation] = useState<number | string>()
  const dispatch = useDispatch()

  // const parseBinaryToSignedInt = (binary) => {
  //   const binaryString = binary.padStart(32, binary[0])
  //   const unsignedInt = parseInt(binaryString, 2)
  //   //check negative number
  //   if (binaryString[0] === '1') {
  //     return unsignedInt - Math.pow(2, 32)
  //   }
  //   return unsignedInt
  // }

  const readDWord = (x, y) => {
    const bitCount = 16
    const low = x.toString(2).padStart(bitCount, '0')
    const high = y.toString(2).padStart(bitCount, '0')
    const binaryVal = high + low
    // console.log('low:', low)
    // console.log('high:', high)
    // console.log('binaryVal:', binaryVal)
    // // const tempval = parseInt(binaryVal, 2)

    // return parseBinaryToSignedInt(binaryVal)

    const tempval = parseInt(binaryVal, 2)
    return tempval << 0
  }
  const connect = () => {
    window.electron.connect()

    window.electron.subscribeLoadcell((value) => {
      const loadData = readDWord(value.data[0], value.data[1])
      const elengationData = readDWord(value.data[2], value.data[3])
      setLoadData(loadData)
      if (settingsState.elengationCalibrateVal !== undefined) {
        setElengation(elengationData / settingsState.elengationCalibrateVal)
      } else {
        setElengation(`Need to Calibrate! ${elengationData}`)
      }
      dispatch(setData({ loadData: loadData, elengationData: elengationData }))
    })
  }
  useEffect(() => {
    connect()
    return () => {
      window.electron.disconnect()
    }
  }, [])

  // 
  useEffect(() => {
    window.electron.unsubscribeFromRandomNumber()
    window.electron.subscribeLoadcell((value) => {
      const loadData = readDWord(value.data[0], value.data[1])
      const elengationData = readDWord(value.data[2], value.data[3])
      setLoadData(loadData)
      if (settingsState.elengationCalibrateVal !== undefined) {
        setElengation((elengationData / settingsState.elengationCalibrateVal).toFixed(4))
      } else {
        setElengation(`Need to Calibrate! ${elengationData}`)
      }
      dispatch(setData({ loadData: loadData, elengationData: elengationData }))
    })
  }, [settingsState.elengationCalibrateVal])

 

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
