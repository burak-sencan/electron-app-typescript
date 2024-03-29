import { RootState } from '@renderer/app/store'
import { saveElengation } from '@renderer/features/userSettingSlice'
import { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const Calibration = () => {
  const { elengation } = useSelector((state: RootState) => state.liveData)
  const { settingsState } = useSelector((state: RootState) => state.setting) // Access the counter state from the Redux store

  const dispatch = useDispatch()

  const [firstVal, setFirstVal] = useState<number>(0)
  const [secondVal, setSecondVal] = useState<number>(0)
  const [showButtons, setshowButtons] = useState<boolean>(false)
  const [showInput, setshowInput] = useState<boolean>(false)
  const [showManuelInput, setshowManuelInput] = useState<boolean>(false)
  const [input, setInput] = useState<number>(0)
  const [calibrateVal, setCalibrateVal] = useState<number>(0)

  const initCalibrate = () => {
    setFirstVal(elengation)
    setSecondVal(0)
    setInput(0)
    setshowButtons(true)
    setshowManuelInput(false)
    setCalibrateVal(0)
  }

  const againCalibrate = () => {
    setFirstVal(0)
    setSecondVal(0)
    setInput(0)
    setshowButtons(false)
    setshowInput(false)
    setshowManuelInput(false)

    setCalibrateVal(0)
  }

  const calculate = (inputVal) => {
    setSecondVal(elengation)

    setCalibrateVal(Math.abs(elengation - firstVal) / inputVal)
  }

  return (
    <div className=" flex w-full flex-col items-baseline gap-4 border p-4">
      <div className="flex gap-8">
        <p>First value: {firstVal}</p>
        <p>Second value: {secondVal}</p>
      </div>
      <div className="flex items-baseline gap-2">
        <button
          disabled={showButtons}
          className={`${showButtons ? 'bg-gray-400' : 'bg-yellow-400'} rounded-md p-2`}
          onClick={initCalibrate}
        >
          Start Calibration
        </button>
        <button
          disabled={showButtons}
          className={`${showButtons ? 'bg-gray-400' : 'bg-yellow-400'} rounded-md p-2`}
          onClick={() => {
            setshowManuelInput(true)
          }}
        >
          Enter Manuel Calibration Val
        </button>
      </div>

      {showButtons && (
        <div className="flex gap-2">
          <button
            className="center gap-4 rounded-md bg-lime-400 p-4 active:bg-yellow-200"
            onClick={() => {
              window.electron.up()
              setshowInput(true)
            }}
          >
            Up <AiOutlineArrowUp />
          </button>
          <button
            className="center gap-4 rounded-md bg-lime-400 p-4 active:bg-yellow-200"
            onClick={() => {
              window.electron.down()
              setshowInput(true)
            }}
          >
            Down <AiOutlineArrowDown />
          </button>
        </div>
      )}

      {showInput && (
        <label htmlFor="input">
          Measured value milimeter:
          <input
            type="number"
            className="border bg-slate-300"
            placeholder="Enter the elengation val"
            value={input}
            onChange={(e) => {
              setInput(+e.target.value)
              calculate(+e.target.value)
            }}
          />
        </label>
      )}
      {showManuelInput && (
        <label htmlFor="input">
          Enter Manuel Calibration Val
          <input
            type="number"
            className="border bg-slate-300"
            placeholder="Enter the elengation val"
            value={input}
            onChange={(e) => {
              setInput(+e.target.value)
              setCalibrateVal(+e.target.value)
            }}
          />
        </label>
      )}
      {showInput && (
        <label htmlFor="calibrateVal">
          calibrate Val
          <input
            id="calibrateVal"
            className=" border p-2"
            value={calibrateVal}
            onChange={(e) => {
              setCalibrateVal(+e.target.value)
            }}
          />
        </label>
      )}

      <button className="border bg-yellow-400 p-2" onClick={againCalibrate}>
        Again
      </button>
      <p>{elengation / calibrateVal}</p>
      <button
        className="border bg-lime-400 p-2"
        onClick={() => {
          dispatch(saveElengation(calibrateVal))
          window.electron.saveSettings({
            ...settingsState,
            elengationCalibrateVal: calibrateVal
          })
        }}
      >
        Save elengationCalibrateVal val
      </button>

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
export default Calibration
