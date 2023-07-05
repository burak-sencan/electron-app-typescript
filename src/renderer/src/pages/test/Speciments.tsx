import { RootState } from '@renderer/app/store'
import { addSpeciment, setSelectedSpeciment } from '@renderer/features/specimentSlice'
import { useDispatch, useSelector } from 'react-redux'

const Speciments = () => {
  const { speciments } = useSelector((state: RootState) => state.speciments) // Access the counter state from the Redux store
  const { selectedMethod } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store
  const dispatch = useDispatch()

  return (
    <div className="relative flex flex-col gap-1 px-8 pt-16">
      <hr />
      {speciments.map((speciment, idx) => (
        <button
          className=""
          key={speciment.id}
          onClick={() => {
            dispatch(setSelectedSpeciment(speciment))
          }}
        >
          {/* {speciment.id} */}
          <p className="rounded-md border bg-slate-50 p-1 transition hover:bg-slate-200">
            {speciment.method.specimen.specimenLabel.val === ''
              ? `Specimen ${idx + 1}`
              : speciment.method.specimen.specimenLabel.val}
          </p>
        </button>
      ))}
      <button
        className="absolute right-2 top-2 rounded-md bg-slate-200 px-4 py-2"
        onClick={() => {
          dispatch(addSpeciment({ ...selectedMethod }))
        }}
      >
        Add
      </button>
    </div>
  )
}
export default Speciments
