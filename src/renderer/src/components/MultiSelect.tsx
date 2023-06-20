import { useState } from 'react'
import Select from 'react-select'

const MultiSelect = ({ options, name, placeholder, value, custom, customVal, handleChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(value)
  console.log(selectedOptions)
  const handleOptionChange = (value) => {
    setSelectedOptions(value)
    handleChange(name, value)
  }

  return (
    <div>
      {custom && (
        <label>
          <input
            className="border p-2"
            type="checkbox"
            checked={customVal}
            onChange={(e) => {
              handleChange(name, value, e.target.type, e.target.checked)
            }}
          />
          Custom ?
        </label>
      )}

      <Select
        isMulti
        placeholder={placeholder}
        value={selectedOptions}
        options={options}
        onChange={handleOptionChange}
      />
    </div>
  )
}

export default MultiSelect
