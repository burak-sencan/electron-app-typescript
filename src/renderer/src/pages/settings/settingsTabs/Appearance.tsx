import { RootState } from '@renderer/app/store'
import { changed, saveAppearence } from '@renderer/features/userSettingSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

const Appearance = () => {
  const dispatch = useDispatch()
  const { unsavedTempSetting } = useSelector((state: RootState) => state.setting)
  const [rowCheck, setRowCheck] = useState(unsavedTempSetting.appearance.showRowData)

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked
    setRowCheck(isChecked)
    dispatch(saveAppearence(isChecked))
    dispatch(changed())
  }

  return (
    <div className="flex w-full flex-col">
      <h3 className="mb-4 font-semibold text-gray-900 ">Test Screen</h3>
      <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900">
        <li className="w-full rounded-t-lg shadow ">
          <div className="flex items-center pl-3">
            <input
              id="rowdata-checkbox"
              type="checkbox"
              checked={rowCheck}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label
              htmlFor="rowdata-checkbox"
              className="ml-2 w-full py-3 text-sm font-medium text-gray-900"
            >
              Show RowData
            </label>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Appearance
