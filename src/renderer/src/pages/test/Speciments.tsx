import { RootState } from '@renderer/app/store'
import { addSpeciment } from '@renderer/features/specimentSlice'
import { useDispatch, useSelector } from 'react-redux'

const Speciments = () => {
  const { speciments } = useSelector((state: RootState) => state.speciments) // Access the counter state from the Redux store
  const dispatch = useDispatch()

  return (
    <div className="flex items-start flex-col">
      {speciments.map((speciment) => (
        <button key={speciment.id}>{speciment.id}</button>
      ))}
      <button
        onClick={() => {
          dispatch(addSpeciment())
        }}
      >
        Add
      </button>
    </div>
  )
}
export default Speciments
