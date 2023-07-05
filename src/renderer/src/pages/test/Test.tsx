import RowData from './RowData'
import Speciments from './Speciments'
import CustomMethodVariables from './CustomMethodVariables'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/app/store'
import TestGraphic from './TestGraphic'

const Test = () => {
  const { settingsState } = useSelector((state: RootState) => state.setting) // Access the counter state from the Redux store

  return (
    <div className="flex h-full gap-2 bg-slate-200">
      <div className="w-1/5 bg-white shadow-lg ">
        <Speciments />
      </div>

      <div className="flex w-1/5 flex-col gap-2 bg-white p-4 shadow-lg ">
        <div className="h-1/2 ">
          <CustomMethodVariables />
        </div>
        <hr />
        <div className="h-1/2 ">Show Ended Test values</div>
      </div>

      <div className="flex w-3/5 flex-col gap-1">
        <div className="min-h-[50%]  w-full bg-white p-4 shadow-lg">
          <TestGraphic />
        </div>
        {settingsState.appearance.showRowData && (
          <div className="min-h-[50%] overflow-auto bg-white p-4 shadow-lg">
            <RowData />
          </div>
        )}
      </div>
    </div>
  )
}
export default Test
