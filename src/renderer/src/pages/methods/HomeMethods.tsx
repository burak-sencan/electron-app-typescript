import { RootState } from '@renderer/app/store'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomeMethods = () => {
  const navigate = useNavigate()
  const { methods } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store

  return (
    <div className="flex flex-col gap-1">
      <button
        className="self-baseline border"
        onClick={() => {
          navigate('/dashboard/create-method')
        }}
      >
        Create Method
      </button>
      <hr />
      {methods.map((method, idx) => (
        <div className="flex gap-4" key={idx}>
          {method.definations.name}
          <button className="self-baseline border">Edit</button>
          <button className="self-baseline border">Delete</button>
          <button className="self-baseline border">Copy</button>
        </div>
      ))}
    </div>
  )
}
export default HomeMethods
