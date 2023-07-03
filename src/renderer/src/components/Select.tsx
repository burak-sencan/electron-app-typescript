const Select = ({ options, name, placeholder, value, custom, customVal, handleChange }) => {
  return (
    <div className="flex">
      {custom && (
        <label>
          <input type="checkbox" name={name} checked={customVal} onChange={handleChange} />
          Custom ?
        </label>
      )}

      <label>
        {placeholder}
        <select className="border p-2" name={name} value={value} onChange={handleChange}>
          {options.map((opt) => (
            <option value={opt.val} key={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
export default Select
