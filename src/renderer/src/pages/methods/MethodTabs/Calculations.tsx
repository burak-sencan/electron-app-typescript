import Input from '@renderer/components/Input'

const Calculations = ({ setMethodState, methodState }) => {
  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        calculations: {
          ...prevState.calculations,
          [name]: {
            ...prevState.calculations[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        calculations: {
          ...prevState.calculations,
          [name]: {
            ...prevState.calculations[name],
            val: value
          }
        }
      }))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        name={'elengation'}
        placeholder={'elengation value'}
        value={methodState.calculations.elengation.val}
        custom={methodState.calculations.elengation.custom}
        customVal={methodState.calculations.elengation.customVal}
        handleMaterialChange={handleMaterialChange}
      />

      <Input
        name={'lastHeight'}
        placeholder={'lastHeight val'}
        value={methodState.calculations.lastHeight.val}
        custom={methodState.calculations.lastHeight.custom}
        customVal={methodState.calculations.lastHeight.customVal}
        handleMaterialChange={handleMaterialChange}
      />
    </div>
  )
}

export default Calculations
