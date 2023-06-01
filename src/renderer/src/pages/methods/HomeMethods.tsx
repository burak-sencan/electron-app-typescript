import { useNavigate } from 'react-router-dom'

const HomeMethods = () => {
  const navigate = useNavigate()
  const methods = [
    { id: 1, name: 'method 1' },
    { id: 2, name: 'method 2' },
    { id: 3, name: 'method 3' },
    { id: 4, name: 'method 4' },
    { id: 5, name: 'method 5' }
  ]
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
      {methods.map((method) => (
        <div className="flex gap-4" key={method.id}>
          {method.name}
          <button className="self-baseline border">Edit</button>
          <button className="self-baseline border">Delete</button>
          <button className="self-baseline border">Copy</button>
        </div>
      ))}
    </div>
  )
}
export default HomeMethods
