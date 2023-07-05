const Input = ({ name, placeholder, value, custom, customVal, type, handleChange }) => {
  return (
    <div className="flex items-center">
      {custom && (
        <label className="pr-4">
          <input type="checkbox" name={name} checked={customVal} onChange={handleChange} />
        </label>
      )}
      <div className="flex items-center gap-4">
        <p className="w-40 text-yellow-400">{placeholder}</p>
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
    </div>
  )
}
export default Input
