import { RootState } from '@renderer/app/store'
import { setSelectedMethod } from '@renderer/features/methodSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomeTest = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { methods, selectedMethod } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store

  return (
    <div className="flex flex-col">
      {methods.map((method, idx) => (
        <button
          className={method === selectedMethod ? 'bg-slate-100' : ''}
          key={idx}
          onClick={() => {
            dispatch(setSelectedMethod(method))
            console.log(method)
          }}
        >
          {method?.definations?.name.val}
        </button>
      ))}

      <button
        className="self-baseline border p-4"
        onClick={() => {
          navigate('/dashboard/test')
        }}
      >
        Go to Test
      </button>
    </div>
  )
}
export default HomeTest
