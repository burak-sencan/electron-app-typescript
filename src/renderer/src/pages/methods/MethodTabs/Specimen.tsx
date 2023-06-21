import Input from '@renderer/components/Input'
import Select from '@renderer/components/Select'
import { specimenGeometry } from '@renderer/utils/methodOptions/specimentOptions'

const Specimen = ({ setMethodState, methodState }) => {
  const handleSpecimenPropertiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        specimen: {
          ...prevState.specimen,
          [name]: {
            ...prevState.specimen[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        specimen: {
          ...prevState.specimen,
          [name]: {
            ...prevState.specimen[name],
            val: value
          }
        }
      }))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        name={'specimenLabel'}
        type={'text'}
        placeholder={'specimenLabel'}
        value={methodState.specimen.specimenLabel.val}
        custom={methodState.specimen.specimenLabel.custom}
        customVal={methodState.specimen.specimenLabel.customVal}
        handleChange={handleSpecimenPropertiesChange}
      />
      <Select
        options={specimenGeometry}
        name={'specimenGeometry'}
        placeholder={'specimenGeometry val'}
        value={methodState.specimen.specimenGeometry.val}
        custom={methodState.specimen.specimenGeometry.custom}
        customVal={methodState.specimen.specimenGeometry.customVal}
        handleChange={handleSpecimenPropertiesChange}
      />
      <Input
        name={'specimenWidth'}
        type={'float'}
        placeholder={'specimenWidth'}
        value={methodState.specimen.specimenWidth.val}
        custom={methodState.specimen.specimenWidth.custom}
        customVal={methodState.specimen.specimenWidth.customVal}
        handleChange={handleSpecimenPropertiesChange}
      />
      <Input
        name={'specimenThickness'}
        type={'float'}
        placeholder={'specimenThickness'}
        value={methodState.specimen.specimenThickness.val}
        custom={methodState.specimen.specimenThickness.custom}
        customVal={methodState.specimen.specimenThickness.customVal}
        handleChange={handleSpecimenPropertiesChange}
      />
      <Input
        name={'specimenLenght'}
        type={'float'}
        placeholder={'specimenLenght'}
        value={methodState.specimen.specimenLenght.val}
        custom={methodState.specimen.specimenLenght.custom}
        customVal={methodState.specimen.specimenLenght.customVal}
        handleChange={handleSpecimenPropertiesChange}
      />
    </div>
  )
}

export default Specimen
