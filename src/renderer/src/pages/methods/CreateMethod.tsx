import { createMethod } from '@renderer/features/methodSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Definations from './MethodTabs/Definations'
import PhysicalProperties from './MethodTabs/PhysicalProperties'
import Calculations from './MethodTabs/Calculations'
import TestEnd from './MethodTabs/TestEnd'
import { Method } from '@renderer/types'

const CreateMethod = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(0)
  const [methodState, setMethodState] = useState<Method>({
    id: crypto.randomUUID(),
    definations: {
      name: {
        custom: true,
        customVal: false,
        val: ''
      },
      defination: {
        custom: false,
        customVal: false,
        val: ''
      }
    },
    physicalProperties: {
      width: {
        custom: true,
        customVal: false,
        val: ''
      },
      radious: {
        custom: true,
        customVal: false,
        val: ''
      }
    },
    calculations: {
      elengation: {
        custom: true,
        customVal: false,
        val: 0
      },
      lastHeight: {
        custom: false,
        customVal: false,
        val: 0
      }
    },
    testEnd: {
      break: {
        custom: false,
        customVal: false,
        val: 0
      },
      lastLoad: {
        custom: false,
        customVal: false,
        val: 0
      }
    }
  })

  const handleTabChange = (index) => {
    setActiveTab(index)
  }
  const handleSaveMethod = async () => {
    await window.electron.saveMethod(methodState)
    dispatch(createMethod(methodState))
    navigate('/dashboard/home-methods')
  }
  return (
    <div>
      <div className="flex  justify-between border">
        <div className="flex gap-4">
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
        <button className={''} onClick={handleSaveMethod}>
          Save
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
