import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeTest = () => {
  const navigate = useNavigate()
  const [method, setMethod] = useState('')

  const methods = [
    { id: 1, name: 'method 1' },
    { id: 2, name: 'method 2' },
    { id: 3, name: 'method 3' },
    { id: 4, name: 'method 4' },
    { id: 5, name: 'method 5' }
  ]

  return (
    <div className="flex flex-col">
      {methods.map((method) => (
        <button
          className="self-baseline"
          key={method.id}
          onClick={() => {
            setMethod(method.name)
          }}
        >
          {method.name}
        </button>
      ))}
      <p>Selected Method : {method}</p>
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
