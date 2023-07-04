import { RootState } from '@renderer/app/store'
import { saveElengation } from '@renderer/features/userSettingSlice'
import { useState } from 'react'
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
    <div className="flex flex-col items-baseline gap-4 border m-2">
      <h1 className="w-full text-center">Calibration Component</h1>
      <p>firstVal: {firstVal}</p>
      <p>secondVal: {secondVal}</p>
      <div className="flex flex-col items-baseline gap-2">
        <button
          disabled={showButtons}
          className={`${showButtons ? 'bg-gray-400' : 'bg-lime-400'} rounded-full p-2`}
          onClick={initCalibrate}
        >
          Start Calibration
        </button>
        <button
          disabled={showButtons}
          className={`${showButtons ? 'bg-gray-400' : 'bg-lime-400'} rounded-full p-2`}
          onClick={() => {
            setshowManuelInput(true)
          }}
        >
           Enter Manuel Calibration Val
        </button>
      </div>

      {showButtons && (
        <div className="flex">
          <button
            className=" m-4  rounded-md bg-lime-400 p-4 active:bg-yellow-200"
            onClick={() => {
              window.electron.up()
              setshowInput(true)
            }}
          >
            Up
          </button>
          <button
            className=" m-4  rounded-md bg-lime-400 p-4 active:bg-yellow-200"
            onClick={() => {
              window.electron.down()
              setshowInput(true)
            }}
          >
            Down
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
    </div>
  )
}
export default Calibration
