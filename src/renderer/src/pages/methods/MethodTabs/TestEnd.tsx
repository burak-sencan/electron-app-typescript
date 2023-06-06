import Input from '@renderer/components/Input'

const TestEnd = ({ setMethodState, methodState }) => {
  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        testEnd: {
          ...prevState.testEnd,
          [name]: {
            ...prevState.testEnd[name],
            custom: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        testEnd: {
          ...prevState.testEnd,
          [name]: {
            ...prevState.testEnd[name],
            val: value
          }
        }
      }))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        name={'break'}
        placeholder={'break'}
        value={methodState.testEnd.break.val}
        custom={methodState.testEnd.break.custom}
        customVal={methodState.testEnd.break.customVal}
        handleMaterialChange={handleMaterialChange}
      />
      <Input
        name={'lastLoad'}
        placeholder={'lastLoad'}
        value={methodState.testEnd.lastLoad.val}
        custom={methodState.testEnd.lastLoad.custom}
        customVal={methodState.testEnd.lastLoad.customVal}
        handleMaterialChange={handleMaterialChange}
      />
    </div>
  )
}

export default TestEnd
