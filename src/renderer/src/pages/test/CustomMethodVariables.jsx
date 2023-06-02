import { useState } from 'react'
import { useSelector } from 'react-redux'

const CustomMethodVariables = () => {
  const { selectedMethod } = useSelector((state) => state.method) // Access the counter state from the Redux store
  const [method, setMethod] = useState(selectedMethod)

  return (
    <div>
      {/* Name */}
      {method.definations.name.customVal && (
        <label htmlFor="name" className="flex gap-4">
          Name:
          <input
            className="border"
            id="name"
            type="text"
            value={method?.definations?.name?.val}
            onChange={(e) => {
              setMethod((prevState) => ({
                ...prevState,
                definations: {
                  ...prevState.definations,
                  name: {
                    ...prevState.definations.name,
                    val: e.target.value
                  }
                }
              }))
            }}
          />
        </label>
      )}

      {/* Width */}
      {method.physicalProperties.width.customVal && (
        <label htmlFor="width" className="flex gap-4">
          Width:
          <input
            className="border"
            id="width"
            type="number"
            value={method?.physicalProperties?.width?.val}
            onChange={(e) => {
              setMethod((prevState) => ({
                ...prevState,
                physicalProperties: {
                  ...prevState.physicalProperties,
                  width: {
                    ...prevState.physicalProperties.width,
                    val: e.target.value
                  }
                }
              }))
            }}
          />
        </label>
      )}
    </div>
  )
}
export default CustomMethodVariables
