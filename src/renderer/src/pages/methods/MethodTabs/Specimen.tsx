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
        name={'secimenThickness'}
        type={'float'}
        placeholder={'secimenThickness'}
        value={methodState.specimen.secimenThickness.val}
        custom={methodState.specimen.secimenThickness.custom}
        customVal={methodState.specimen.secimenThickness.customVal}
        handleChange={handleSpecimenPropertiesChange}
      />
      <Input
        name={'secimenLenght'}
        type={'float'}
        placeholder={'secimenLenght'}
        value={methodState.specimen.secimenLenght.val}
        custom={methodState.specimen.secimenLenght.custom}
        customVal={methodState.specimen.secimenLenght.customVal}
        handleChange={handleSpecimenPropertiesChange}
      />
    </div>
  )
}

export default Specimen
