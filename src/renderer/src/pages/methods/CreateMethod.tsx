import { useState } from 'react'

interface Method {
  definations: {
    name: string
    defination: string
  }
  physicalProperties: {
    width: number
    radious: number
  }
  calculations: {
    elengation: number
    lastHeight: number
  }
  testEnd: {
    break: number
    lastLoad: number
  }
}

const CreateMethod = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [methodState, setMethodState] = useState<Method>({
    definations: {
      name: '',
      defination: ''
    },
    physicalProperties: {
      width: 0,
      radious: 0
    },
    calculations: {
      elengation: 0,
      lastHeight: 0
    },
    testEnd: {
      break: 10,
      lastLoad: 20
    }
  })

  const handleTabChange = (index) => {
    setActiveTab(index)
  }
  return (
    <div>
      <div className="flex gap-4 border">
        <button
          className={activeTab === 0 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(0)}
        >
          Definations
        </button>
        <button
          className={activeTab === 1 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(1)}
        >
          PhysicalProperties
        </button>
        <button
          className={activeTab === 2 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(2)}
        >
          Calculations
        </button>
        <button
          className={activeTab === 3 ? 'bg-slate-100' : ''}
          onClick={() => handleTabChange(3)}
        >
          TestEnd
        </button>
      </div>

      {activeTab === 0 ? (
        <Definations setMethodState={setMethodState} methodState={methodState} />
      ) : activeTab === 1 ? (
        <PhysicalProperties setMethodState={setMethodState} methodState={methodState} />
      ) : activeTab === 2 ? (
        <Calculations setMethodState={setMethodState} methodState={methodState} />
      ) : activeTab === 3 ? (
        <TestEnd setMethodState={setMethodState} methodState={methodState} />
      ) : null}
    </div>
  )
}
export default CreateMethod

const Definations = ({ setMethodState, methodState }) => {
  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setMethodState((prevState) => ({
      ...prevState,
      definations: {
        ...prevState.definations,
        [name]: value
      }
    }))
  }
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="name"
        value={methodState.definations.name}
        onChange={handleMaterialChange}
      />
      <input
        type="text"
        name="defination"
        placeholder="defination"
        value={methodState.definations.defination}
        onChange={handleMaterialChange}
      />
    </div>
  )
}
const PhysicalProperties = ({ setMethodState, methodState }) => {
  const handlePhysicalPropertiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setMethodState((prevState) => ({
      ...prevState,
      physicalProperties: {
        ...prevState.physicalProperties,
        [name]: value
      }
    }))
  }
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        name="width"
        placeholder="width"
        value={methodState.physicalProperties.width}
        onChange={handlePhysicalPropertiesChange}
      />
      <input
        type="text"
        name="radious"
        placeholder="radious"
        value={methodState.physicalProperties.radious}
        onChange={handlePhysicalPropertiesChange}
      />
    </div>
  )
}

const Calculations = ({ setMethodState, methodState }) => {
  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setMethodState((prevState) => ({
      ...prevState,
      calculations: {
        ...prevState.calculations,
        [name]: value
      }
    }))
  }
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        name="elengation"
        placeholder="elengation"
        value={methodState.calculations.elengation}
        onChange={handleMaterialChange}
      />
      <input
        type="text"
        name="lastHeight"
        placeholder="lastHeight"
        value={methodState.definations.lastHeight}
        onChange={handleMaterialChange}
      />
    </div>
  )
}
const TestEnd = ({ setMethodState, methodState }) => {
  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setMethodState((prevState) => ({
      ...prevState,
      testEnd: {
        ...prevState.testEnd,
        [name]: value
      }
    }))
  }
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        name="break"
        placeholder="break"
        value={methodState.calculations.break}
        onChange={handleMaterialChange}
      />
      <input
        type="text"
        name="lastLoad"
        placeholder="lastLoad"
        value={methodState.definations.lastLoad}
        onChange={handleMaterialChange}
      />
    </div>
  )
}
