import { RootState } from '@renderer/app/store'
import {
  saveCustomVariables,
  updateDefinationName,
  updatePhysicalPropertiesRadious,
  updatePhysicalPropertiesWidth
} from '@renderer/features/specimentSlice'
import { useDispatch, useSelector } from 'react-redux'

const CustomMethodVariables = () => {
  const { selectedSpeciment } = useSelector((state: RootState) => state.speciments)

  const dispatch = useDispatch()
  return (
    <div className="flex h-full flex-col items-baseline gap-2">
      <p>Custom Variables</p>
      <div className="overflow-auto">
        {selectedSpeciment?.method?.definations?.name?.customVal && (
          <label>
            Name:
            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.definations.name.val}
              onChange={(e) => {
                dispatch(updateDefinationName(e.target.value))
              }}
            />
          </label>
        )}
        {selectedSpeciment?.method?.physicalProperties?.radious?.customVal && (
          <label>
            Radious:
            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.physicalProperties.radious.val}
              onChange={(e) => {
                dispatch(updatePhysicalPropertiesRadious(e.target.value))
              }}
            />
          </label>
        )}
        {selectedSpeciment?.method?.physicalProperties?.width?.customVal && (
          <label>
            Width:
            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.physicalProperties.width.val}
              onChange={(e) => {
                dispatch(updatePhysicalPropertiesWidth(e.target.value))
              }}
            />
          </label>
        )}
      </div>
      <button
        onClick={() => {
          dispatch(saveCustomVariables(selectedSpeciment))
        }}
        className="mt-auto self-end rounded border bg-lime-100 p-1 "
      >
        Kaydet
      </button>
    </div>
  )
}
export default CustomMethodVariables
