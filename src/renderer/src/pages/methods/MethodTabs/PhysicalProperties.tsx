import Input from '@renderer/components/Input'

const PhysicalProperties = ({ setMethodState, methodState }) => {
  const handlePhysicalPropertiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        physicalProperties: {
          ...prevState.physicalProperties,
          [name]: {
            ...prevState.physicalProperties[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        physicalProperties: {
          ...prevState.physicalProperties,
          [name]: {
            ...prevState.physicalProperties[name],
            val: value
          }
        }
      }))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        name={'width'}
        placeholder={'width'}
        value={methodState.physicalProperties.width.val}
        custom={methodState.physicalProperties.width.custom}
        customVal={methodState.physicalProperties.width.customVal}
        handleMaterialChange={handlePhysicalPropertiesChange}
      />
      <Input
        name={'radious'}
        placeholder={'radious val'}
        value={methodState.physicalProperties.radious.val}
        custom={methodState.physicalProperties.radious.custom}
        customVal={methodState.physicalProperties.radious.customVal}
        handleMaterialChange={handlePhysicalPropertiesChange}
      />
    </div>
  )
}

export default PhysicalProperties
