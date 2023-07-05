import MultiSelect from '@renderer/components/MultiSelect'
import { layoutSchema, liveDisplaySelection } from '@renderer/utils/methodOptions/displayOptions'

const Display = ({ setMethodState, methodState }) => {
  const handleDisplayChange = (name, value, type, checked ) => {
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        display: {
          ...prevState.display,
          [name]: {
            ...prevState.display[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        display: {
          ...prevState.display,
          [name]: {
            ...prevState.display[name],
            val: value
          }
        }
      }))
    }
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <MultiSelect
        options={liveDisplaySelection}
        name={'liveDisplaySelection'}
        placeholder={'liveDisplaySelection'}
        value={methodState.display.liveDisplaySelection.val}
        custom={methodState.display.liveDisplaySelection.custom}
        customVal={methodState.display.liveDisplaySelection.customVal}
        handleChange={handleDisplayChange}
      />
      <MultiSelect
        options={layoutSchema}
        name={'layoutSchema'}
        placeholder={'layoutSchema'}
        value={methodState.display.layoutSchema.val}
        custom={methodState.display.layoutSchema.custom}
        customVal={methodState.display.layoutSchema.customVal}
        handleChange={handleDisplayChange}
      />
    </div>
  )
}

export default Display
