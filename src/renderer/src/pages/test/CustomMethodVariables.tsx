import { RootState } from '@renderer/app/store'
import {
  saveCustomVariables,
  updateDefinationName,
  updateSpecimenSpecimenLabel,
  updateSpecimenSpecimenLenght,
  updateSpecimenSpecimenThickness,
  updateSpecimenSpecimenWidth,
  updateTestControlPreload
} from '@renderer/features/specimentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const CustomMethodVariables = () => {
  const { selectedSpeciment } = useSelector((state: RootState) => state.speciments)
  const { selectedMethod } = useSelector((state: RootState) => state.method)

  const dispatch = useDispatch()

  return (
    <div className="flex h-full flex-col items-baseline gap-2">
      <p>Selected method: {selectedMethod.general.name.val} </p>
      <p>Custom Variables</p>
      <div className="flex flex-col overflow-auto">
        {selectedSpeciment?.method?.general?.name?.customVal && (
          <label>
            Name:
            <input
              className="ml-2 border"
              type="text"
              value={selectedSpeciment.method.general.name.val}
              onChange={(e) => {
                dispatch(updateDefinationName(e.target.value))
              }}
            />
          </label>
        )}
        {selectedSpeciment?.method?.specimen?.specimenLabel?.customVal && (
          <label>
            Label:
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
          <label>
            Width:
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
          <label>
            Thickness:
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
          <label>
            Lenght:
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
        {selectedSpeciment?.method?.testControl?.preload?.customVal && (
          <label className="flex">
            Preload:
            <div
              className={`${
                selectedSpeciment?.method?.testControl?.preload?.val === false
                  ? 'justify-end bg-gray-400'
                  : 'justify-start bg-yellow-400'
              } flex  w-16 cursor-pointer rounded-[32px] shadow transition`}
              onClick={() => {
                dispatch(
                  updateTestControlPreload(!selectedSpeciment?.method?.testControl?.preload?.val)
                )
              }}
            >
              <motion.div
                layout
                transition={{
                  type: 'spring',
                  stiffness: 700,
                  damping: 30
                }}
                className="center h-8 w-8 select-none rounded-[32px] bg-white  text-sm"
              >
                {selectedSpeciment?.method?.testControl?.preload?.val ? 'on' : 'off'}
              </motion.div>
            </div>
          </label>
        )}
      </div>
      <button
        onClick={() => {
          dispatch(saveCustomVariables(selectedSpeciment))
        }}
        className="mt-auto self-end rounded border bg-lime-100 p-1"
      >
        Kaydet
      </button>
    </div>
  )
}
export default CustomMethodVariables
