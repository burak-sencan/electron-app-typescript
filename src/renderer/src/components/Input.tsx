const Input = ({ name, placeholder, value, custom, customVal, type, handleChange }) => {
  return (
    <div className="flex">
      {custom && (
        <label>
          <input type="checkbox" name={name} checked={customVal} onChange={handleChange} />
          Custom ?
        </label>
      )}

      <input
        name={name}
        className="border p-2"
        type={type === 'float' ? 'number' : type === 'number' ? 'number' : 'string'}
        step={type === 'float' ? '0.1' : undefined}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
export default Input
