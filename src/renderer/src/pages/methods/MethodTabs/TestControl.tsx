import Input from '@renderer/components/Input'
import Select from '@renderer/components/Select'
import Switch from '@renderer/components/Switch'
import {
  dataRate,
  testControlMode,
  testControlPreloadType,
  testEndAction,
  testEndCriteria
} from '@renderer/utils/methodOptions/testControlOptions'

const TestControl = ({ setMethodState, methodState }) => {
  const handleTestControlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        testControl: {
          ...prevState.testControl,
          [name]: {
            ...prevState.testControl[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        testControl: {
          ...prevState.testControl,
          [name]: {
            ...prevState.testControl[name],
            val: value
          }
        }
      }))
    }
  }
  const handleTestControlSwitchChange = ({ name, value, type, checked }) => {
    if (type === 'checkbox') {
      setMethodState((prevState) => ({
        ...prevState,
        testControl: {
          ...prevState.testControl,
          [name]: {
            ...prevState.testControl[name],
            customVal: checked
          }
        }
      }))
    } else {
      setMethodState((prevState) => ({
        ...prevState,
        testControl: {
          ...prevState.testControl,
          [name]: {
            ...prevState.testControl[name],
            val: value
          }
        }
      }))
    }
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <Switch
          name={'preload'}
          placeholder={'preload'}
          value={methodState.testControl.preload.val}
          custom={methodState.testControl.preload.custom}
          customVal={methodState.testControl.preload.customVal}
          handleChange={handleTestControlSwitchChange}
        />
        <div
          className={`${
            !methodState.testControl.preload.val ? ' bg-gray-200' : ''
          } transition ease-in-out`}
          style={{ pointerEvents: !methodState.testControl.preload.val ? 'none' : 'auto' }}
        >
          <Select
            options={testControlPreloadType}
            name={'preloadType'}
            placeholder={'preloadType val'}
            value={methodState.testControl.preloadType.val}
            custom={methodState.testControl.preloadType.custom}
            customVal={methodState.testControl.preloadType.customVal}
            handleChange={handleTestControlChange}
          />
          <Input
            name={'preloadValue'}
            type={'number'}
            placeholder={'preloadValue val'}
            value={methodState.testControl.preloadValue.val}
            custom={methodState.testControl.preloadValue.custom}
            customVal={methodState.testControl.preloadValue.customVal}
            handleChange={handleTestControlChange}
          />
          <Input
            name={'preloadWaitTime'}
            type={'number'}
            placeholder={'preloadWaitTime val'}
            value={methodState.testControl.preloadWaitTime.val}
            custom={methodState.testControl.preloadWaitTime.custom}
            customVal={methodState.testControl.preloadWaitTime.customVal}
            handleChange={handleTestControlChange}
          />
        </div>
      </div>
      <Input
        name={'testSpeed'}
        type={'number'}
        placeholder={'testSpeed val'}
        value={methodState.testControl.testSpeed.val}
        custom={methodState.testControl.testSpeed.custom}
        customVal={methodState.testControl.testSpeed.customVal}
        handleChange={handleTestControlChange}
      />
      <Select
        options={testControlMode}
        name={'testControlMode'}
        placeholder={'testControlMode val'}
        value={methodState.testControl.testControlMode.val}
        custom={methodState.testControl.testControlMode.custom}
        customVal={methodState.testControl.testControlMode.customVal}
        handleChange={handleTestControlChange}
      />
      <Select
        options={testEndCriteria}
        name={'testEndCriteria'}
        placeholder={'testEndCriteria val'}
        value={methodState.testControl.testEndCriteria.val}
        custom={methodState.testControl.testEndCriteria.custom}
        customVal={methodState.testControl.testEndCriteria.customVal}
        handleChange={handleTestControlChange}
      />
      <Select
        options={testEndAction}
        name={'testEndAction'}
        placeholder={'testEndAction val'}
        value={methodState.testControl.testEndAction.val}
        custom={methodState.testControl.testEndAction.custom}
        customVal={methodState.testControl.testEndAction.customVal}
        handleChange={handleTestControlChange}
      />
      <Select
        options={dataRate}
        name={'dataRate'}
        placeholder={'testEndAction val'}
        value={methodState.testControl.dataRate.val}
        custom={methodState.testControl.dataRate.custom}
        customVal={methodState.testControl.dataRate.customVal}
        handleChange={handleTestControlChange}
      />
    </div>
  )
}

export default TestControl
