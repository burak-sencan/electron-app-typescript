const Input = ({ name, placeholder, value, custom, customVal, handleMaterialChange }) => {
  return (
    <div className="flex">
      {custom && (
        <label>
          <input
            type="checkbox"
            name={name}
            checked={customVal}
            onChange={handleMaterialChange}
          />
          Custom ?
        </label>
      )}

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleMaterialChange}
      />
    </div>
  )
}
export default Input
