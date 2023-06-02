import Input from '@renderer/components/Input'

const Definations = ({ setMethodState, methodState }) => {
  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        definations: {
          ...prevState.definations,
          [name]: {
            ...prevState.definations[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        definations: {
          ...prevState.definations,
          [name]: {
            ...prevState.definations[name],
            val: value
          }
        }
      }))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        name={'name'}
        placeholder={'Name'}
        value={methodState.definations.name.val}
        custom={methodState.definations.name.custom}
        customVal={methodState.definations.name.customVal}
        handleMaterialChange={handleMaterialChange}
      />
      <Input
        name={'defination'}
        placeholder={'defination'}
        value={methodState.definations.defination.val}
        custom={methodState.definations.defination.custom}
        customVal={methodState.definations.defination.customVal}
        handleMaterialChange={handleMaterialChange}
      />
    </div>
  )
}

export default Definations
