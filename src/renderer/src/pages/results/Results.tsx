import { RootState } from '@renderer/app/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Results = () => {
  const { tests } = useSelector((state: RootState) => state.test)
  const [randomNumber, setRandomNumber] = useState({ data: [], buffer: [] })
  const [connectionStatus, setConnectionStatus] = useState(null)

  useEffect(() => {
    ////modbus//
    window.electron.subscribeLoadcell((value) => {
      setRandomNumber(value)
    })
    window.electron.connectionStatus((value) => {
      setConnectionStatus(value)
    })
  }, [])

  return (
    <div>
      {tests.map((test) => (
        <p key={test.id}>{test.name}</p>
      ))}
      <p>Random Number: {randomNumber?.data[0]}</p>
      <hr />
      <hr />
      Status: {connectionStatus ? 'Online' : 'Offline'}
      <hr />
      <button
        className=" m-4 rounded-full bg-yellow-400 p-4 active:bg-yellow-200"
        onClick={() => {
          window.electron.connect()
        }}
      >
        Connect
      </button>
      <button
        className=" m-4 rounded-full bg-red-400 p-4 active:bg-yellow-200"
        onClick={() => {
          window.electron.disconnect()
        }}
      >
        Disconnect
      </button>
      <button
        className=" m-4  bg-lime-400 p-4 active:bg-yellow-200"
        onClick={() => {
          window.electron.up()
        }}
      >
        Up
      </button>
      <button
        className=" m-4  bg-lime-400 p-4 active:bg-yellow-200"
        onClick={() => {
          window.electron.down()
        }}
      >
        Down
      </button> 
      <button
        className=" m-4  bg-lime-400 p-4 active:bg-yellow-200"
        onClick={() => {
          window.electron.setEncoderZero()
        }}
      >
        setEncoderZero
      </button>
    </div>
  )
}
export default Results
