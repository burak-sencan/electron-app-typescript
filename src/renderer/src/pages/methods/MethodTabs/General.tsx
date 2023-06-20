import Input from '@renderer/components/Input'
import Select from '@renderer/components/Select'
import { systemOfUnits } from '@renderer/utils/methodOptions/generalOptions'

const General = ({ setMethodState, methodState }) => {
  const handleGeneralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    console.log(name, value, type, checked)
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        general: {
          ...prevState.general,
          [name]: {
            ...prevState.general[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        general: {
          ...prevState.general,
          [name]: {
            ...prevState.general[name],
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
        type={'text'}
        placeholder={'Name'}
        value={methodState.general.name.val}
        custom={methodState.general.name.custom}
        customVal={methodState.general.name.customVal}
        handleChange={handleGeneralChange}
      />
      <Input
        name={'description'}
        type={'text'}
        placeholder={'description'}
        value={methodState.general.description.val}
        custom={methodState.general.description.custom}
        customVal={methodState.general.description.customVal}
        handleChange={handleGeneralChange}
      />
      <Select
        options={systemOfUnits}
        name={'systemOfUnit'}
        placeholder={'systemOfUnit'}
        value={methodState.general.systemOfUnit.val}
        custom={methodState.general.systemOfUnit.custom}
        customVal={methodState.general.systemOfUnit.customVal}
        handleChange={handleGeneralChange}
      />
    </div>
  )
}

export default General
