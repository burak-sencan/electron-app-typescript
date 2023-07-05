import { useState } from 'react'
import { motion } from 'framer-motion'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
}

const Switch = ({ name, placeholder, value, custom, customVal, handleChange }) => {
  const [isOn, setIsOn] = useState<boolean>(value)

  const toggleSwitch = () => {
    setIsOn(!isOn)
    handleChange({ name: name, value: !isOn })
  }

  return (
    <div className="flex gap-2">
      <p className="w-40 text-yellow-400">{placeholder}</p>
      {custom && (
        <label>
          <input
            type="checkbox"
            name={name}
            checked={customVal}
            onChange={(e) => {
              handleChange({
                name: name,
                value: null,
                type: e.target.type,
                checked: e.target.checked
              })
            }}
          />
          Custom ?
        </label>
      )}
      <div
        className={`${
          isOn === false ? 'justify-end bg-gray-400' : 'justify-start bg-yellow-400'
        } flex  w-16 cursor-pointer rounded-[32px] shadow transition`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="center h-8 w-8 select-none rounded-[32px] bg-white  text-sm"
          layout
          transition={spring}
        >
          {isOn ? 'on' : 'off'}
        </motion.div>
      </div>
    </div>
  )
}
export default Switch
