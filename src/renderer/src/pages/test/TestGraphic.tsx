import { useState } from 'react'
import ReactEcharts from 'echarts-for-react'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/app/store'

const TestGraphic = () => {
  const { timeArr, loadArr, elengationArr } = useSelector((state: RootState) => state.chart) // Access the counter state from the Redux store

  const [showElengation, setShowElengation] = useState(false)
  const [showLoad, setShowLoad] = useState(true)

  let option = {
    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'inside',

        xAxisIndex: [0]
      },
      {
        id: 'dataZoomY',
        type: 'inside',
        yAxisIndex: [1]
      }
    ],
    tooltip: {
      trigger: 'axis',
      padding: [20],
      axisPointer: {
        type: 'cross'
      },
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      position: function (point) {
        // fixed at top
        return [point[0] + 20, point[1] + 20]
      },
      extraCssText: 'width: 170px',
      formatter: function (params) {
        const date = params[0].axisValue
        const load = params[0].data
        return `
            X: ${date} <br/>
            Y: ${load} <br/>
            Y/X: ${(load / date).toFixed(4)}
          `
      }
    },
    grid: {
      top: 60,
      left: 30,
      right: 60,
      bottom: 30
    },

    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
        brush: {
          type: ['lineX', 'clear']
        }
      }
    },
    brush: {
      xAxisIndex: 'all',
      brushLink: 'all',
      outOfBrush: {
        colorAlpha: 0.1
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 200,
      color: ['#f00', '#0f0']
    },
    title: {
      text: 'load - time'
    },
    xAxis: {
      type: 'category',
      data: timeArr,
      axisTick: { show: true, interval: 'auto' },
      minorTick: {
        show: false
      },
      axisPointer: {
        link: [
          {
            xAxisIndex: 'all'
          }
        ],
        label: {
          backgroundColor: '#777'
        }
      }
    },

    yAxis: {
      type: 'value',
      axisTick: { show: false },
      minorTick: {
        show: false
      },
      axisPointer: {
        link: [
          {
            xAxisIndex: 'all'
          }
        ],
        label: {
          backgroundColor: '#777'
        }
      }
    },
    animation: false,
    series: [
      {
        data: showElengation === true ? elengationArr : showLoad === true ? loadArr : [],
        type: 'line',
        showSymbol: false
      }
    ]
  }
  return (
    <>
      <div className="flex gap-4 mb-4">
        <button
          className={`${
            showLoad ? 'bg-yellow-300' : ''
          } rounded-md bg-slate-200 px-4 py-2 transition`}
          onClick={() => {
            setShowElengation(false)
            setShowLoad(true)
          }}
        >
          Show Load Graphic
        </button>
        <button
          className={`${
            showElengation ? 'bg-yellow-300' : ''
          } rounded-md bg-slate-200 px-4 py-2 transition`}
          onClick={() => {
            setShowElengation(true)
            setShowLoad(false)
          }}
        >
          Show Elengation Graphic
        </button>
      </div>
      <ReactEcharts option={option} />
    </>
  )
}
export default TestGraphic
