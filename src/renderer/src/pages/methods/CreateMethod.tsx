import { createMethod } from '@renderer/features/methodSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import General from './MethodTabs/General'
import { Method } from '@renderer/types'
import { motion, AnimatePresence } from 'framer-motion'
import Specimen from './MethodTabs/Specimen'
import TestControl from './MethodTabs/TestControl'
import {
  dataRate,
  testControlMode,
  testControlPreloadType,
  testEndAction,
  testEndCriteria
} from '@renderer/utils/methodOptions/testControlOptions'
import { systemOfUnits } from '@renderer/utils/methodOptions/generalOptions'
import { specimenGeometry } from '@renderer/utils/methodOptions/specimentOptions'
import Display from './MethodTabs/Display'
import { layoutSchema, liveDisplaySelection } from '@renderer/utils/methodOptions/displayOptions'

const CreateMethod = () => {
  const tabs = [
    { id: 0, label: 'General' },
    { id: 1, label: 'Specimen' },
    { id: 2, label: 'Test Control' },
    { id: 3, label: 'Display' }
  ]
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState<number>(0)
  const [methodState, setMethodState] = useState<Method>({
    id: crypto.randomUUID(),
    general: {
      name: {
        custom: false,
        customVal: false,
        val: ''
      },
      description: {
        custom: false,
        customVal: false,
        val: ''
      },
      systemOfUnit: {
        custom: false,
        customVal: false,
        val: systemOfUnits[0].val
      }
    },
    specimen: {
      specimenLabel: {
        custom: true,
        customVal: true,
        val: ''
      },
      specimenGeometry: {
        custom: false,
        customVal: false,
        val: specimenGeometry[0].val
      },
      specimenWidth: {
        custom: true,
        customVal: true,
        val: 0
      },
      secimenThickness: {
        custom: true,
        customVal: true,
        val: 0
      },
      secimenLenght: {
        custom: true,
        customVal: true,
        val: 0
      }
    },
    testControl: {
      preload: {
        custom: true,
        customVal: true,
        val: false
      },
      preloadType: {
        custom: false,
        customVal: false,
        val: testControlPreloadType[0].val
      },

      preloadValue: {
        custom: false,
        customVal: false,
        val: 0
      },

      preloadWaitTime: {
        custom: false,
        customVal: false,
        val: 0
      },
      testSpeed: {
        custom: false,
        customVal: false,
        val: 0
      },
      testControlMode: {
        custom: false,
        customVal: false,
        val: testControlMode[0].val
      },
      testEndCriteria: {
        custom: false,
        customVal: false,
        val: testEndCriteria[0].val
      },
      testEndAction: {
        custom: false,
        customVal: false,
        val: testEndAction[0].val
      },
      dataRate: {
        custom: false,
        customVal: false,
        val: dataRate[0].val
      }
    },
    display: {
      liveDisplaySelection: {
        custom: false,
        customVal: false,
        val: liveDisplaySelection
      },
      layoutSchema: {
        custom: false,
        customVal: false,
        val: layoutSchema
      }
    }
  })
  console.log(methodState)
  const handleSaveMethod = async () => {
    await window.electron.saveMethod(methodState)
    dispatch(createMethod(methodState))
    navigate('/dashboard/home-methods')
  }

  return (
    <div className="">
      <div className="flex  justify-between ">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                activeTab === tab.id ? 'bg-slate-100 text-yellow-400 transition' : ''
              } relative w-40 p-4`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id ? (
                <motion.div
                  className="absolute bottom-2 h-[2px] w-32 bg-yellow-400"
                  layoutId="underline"
                />
              ) : null}
            </button>
          ))}
        </div>
        <button className="" onClick={handleSaveMethod}>
          Save
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 0 ? (
            <General setMethodState={setMethodState} methodState={methodState} />
          ) : activeTab === 1 ? (
            <Specimen setMethodState={setMethodState} methodState={methodState} />
          ) : activeTab === 2 ? (
            <TestControl setMethodState={setMethodState} methodState={methodState} />
          ) : activeTab === 3 ? (
            <Display setMethodState={setMethodState} methodState={methodState} />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
export default CreateMethod
