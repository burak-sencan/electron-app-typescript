import { RootState } from '@renderer/app/store'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { HTMLAttributes } from 'react'

const RowData = () => {
  const { timeArr, loadArr, elengationArr } = useSelector((state: RootState) => state.chart) // Access the chart state from the Redux store

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }, [timeArr])

  return (
    <div className="">
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <caption className="bg-white  text-left text-lg font-semibold text-gray-900 ">
            Live Row Data
            <p className="my-1 text-sm font-normal text-gray-500 ">Browse a list of live data</p>
          </caption>
          <thead className="block bg-gray-50 text-xs uppercase text-gray-700  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Load Value
              </th>
              <th scope="col" className="px-6 py-3">
                Elengation Value
              </th>
            </tr>
          </thead>
          <tbody
            ref={bottomRef as React.RefObject<HTMLTableSectionElement>}
            className="block h-64 w-full overflow-auto"
          >
            {timeArr.map((time, idx) => (
              <tr className="border-b bg-white" key={idx}>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  {time}
                </td>
                <td className="px-8 py-4">{loadArr[idx]}</td>
                <td className="px-10 py-4">{elengationArr[idx]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RowData
