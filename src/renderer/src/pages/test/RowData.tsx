import { RootState } from '@renderer/app/store'
import { useSelector } from 'react-redux'

const RowData = () => {
  const { timeArr, loadArr, elengationArr } = useSelector((state: RootState) => state.chart) // Access the chart state from the Redux store

  return (
    <div className="h-60 overflow-auto">
      <table className=" table-auto">
        <thead>
          <tr>
            <th>Time</th>
            <th>Load</th>
            <th>Elengation</th>
          </tr>
        </thead>
        <tbody>
          {timeArr.map((time, idx) => (
            <tr key={idx}>
              <td>{time}</td>
              <td>{loadArr[idx]}</td>
              <td>{elengationArr[idx]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RowData
