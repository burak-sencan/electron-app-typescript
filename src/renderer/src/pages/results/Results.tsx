import { RootState } from '@renderer/app/store'
import ExportTest from '@renderer/components/ExportTest'
import { useSelector } from 'react-redux'

const Results = () => {
  const { tests } = useSelector((state: RootState) => state.test)

  return (
    <div className="p-4">
      {tests.map((test) => (
        <div className="flex gap-4" key={test.id}>
          <p>{test.name}</p>
          <ExportTest />
        </div>
      ))}
      <hr />
      {/* <button
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
      </button> */}
    </div>
  )
}
export default Results
