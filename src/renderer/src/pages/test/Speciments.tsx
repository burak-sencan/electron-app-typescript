import { RootState } from '@renderer/app/store'
import { addSpeciment } from '@renderer/features/specimentSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Speciments = () => {
  const { speciments } = useSelector((state: RootState) => state.speciments) // Access the counter state from the Redux store
  const dispatch = useDispatch()
  const { selectedMethod } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store
  const [method, setMethod] = useState(selectedMethod)

  return (
    <div className="flex flex-col items-start">
      {speciments.map((speciment) => (
        <button
          key={speciment.id}
          onClick={() => {
            console.log(speciment)
          }}
        >
          {speciment.id}
        </button>
      ))}
      <button
        onClick={() => {
          dispatch(addSpeciment(method))
        }}
      >
        Add
      </button>
    </div>
  )
}
export default Speciments
