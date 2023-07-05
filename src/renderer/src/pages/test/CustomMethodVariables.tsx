import { RootState } from '@renderer/app/store'
import {
  saveCustomVariables,
  updateDefinationName,
  updateSpecimenSpecimenLabel,
  updateSpecimenSpecimenLenght,
  updateSpecimenSpecimenThickness,
  updateSpecimenSpecimenWidth
  // updateTestControlPreload
} from '@renderer/features/specimentSlice'
import { useDispatch, useSelector } from 'react-redux'
// import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

const CustomMethodVariables = () => {
  const { selectedSpeciment } = useSelector((state: RootState) => state.speciments)
  const { selectedMethod } = useSelector((state: RootState) => state.method)

  const dispatch = useDispatch()

  return (
    <div className="flex h-full  flex-col items-baseline gap-2 ">
      <p
        className="font-semibold "
        data-tooltip-id="save-button"
        data-tooltip-content="Selected Method for test"
        data-tooltip-delay-show={500}
      >
        Selected method: <span className="text-yellow-400">{selectedMethod.general.name.val}</span>
      </p>

      <p>Custom Variables</p>
      <div className="flex flex-col gap-1 overflow-auto">
        {selectedSpeciment?.method?.specimen?.specimenLabel?.customVal && (
          <label className="flex">
            <p className="w-16">Label:</p>
            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.specimen.specimenLabel.val}
              onChange={(e) => {
                dispatch(updateSpecimenSpecimenLabel(e.target.value))
              }}
            />
          </label>
        )}
        {selectedSpeciment?.method?.specimen?.specimenWidth?.customVal && (
          <label className="flex">
            <p className="w-16">Width:</p>

            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.specimen.specimenWidth.val}
              onChange={(e) => {
                dispatch(updateSpecimenSpecimenWidth(e.target.value))
              }}
            />
          </label>
        )}
        {selectedSpeciment?.method?.specimen?.specimenThickness?.customVal && (
          <label className="flex">
            <p className="w-16">Thickness:</p>

            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.specimen.specimenThickness.val}
              onChange={(e) => {
                dispatch(updateSpecimenSpecimenThickness(e.target.value))
              }}
            />
          </label>
        )}
        {selectedSpeciment?.method?.specimen?.specimenThickness?.customVal && (
          <label className="flex">
            <p className="w-16">Lenght:</p>

            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.specimen.specimenLenght.val}
              onChange={(e) => {
                dispatch(updateSpecimenSpecimenLenght(e.target.value))
              }}
            />
          </label>
        )}
      </div>
      <button
        data-tooltip-id="save-button"
        data-tooltip-content="Hello to you too!"
        data-tooltip-delay-show={500}
        onClick={() => {
          dispatch(saveCustomVariables(selectedSpeciment))
        }}
        className="mt-auto self-end rounded border bg-lime-300  px-2 py-1"
      >
        Save
      </button>
      <Tooltip id="save-button" place="top" className="info-tooltip" />
    </div>
  )
}
export default CustomMethodVariables
