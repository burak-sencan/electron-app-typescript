import { RootState } from '@renderer/app/store'
import { addSpeciment, setSelectedSpeciment } from '@renderer/features/specimentSlice'
import { useDispatch, useSelector } from 'react-redux'

const Speciments = () => {
  const { speciments } = useSelector((state: RootState) => state.speciments) // Access the counter state from the Redux store
  const { selectedMethod } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-start">
      {speciments.map((speciment) => (
        <button
          key={speciment.id}
          onClick={() => {
            dispatch(setSelectedSpeciment(speciment))
          }}
        >
          {speciment.id}
        </button>
      ))}
      <button
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
