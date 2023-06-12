import ReactEcharts from 'echarts-for-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/app/store'
import RowData from './RowData'
import Speciments from './Speciments'
import CustomMethodVariables from './CustomMethodVariables'

const Test = () => {
  const { settingsState } = useSelector((state: RootState) => state.setting) // Access the counter state from the Redux store
  const { timeArr, loadArr, elengationArr } = useSelector((state: RootState) => state.chart) // Access the counter state from the Redux store
  const [showElengation, setShowElengation] = useState(false)
  const [showLoad, setShowLoad] = useState(true)

  // const [option, setOption] = useState<any>({
  //   dataZoom: [
  //     {
  //       id: 'dataZoomX',
  //       type: 'inside',

  //       xAxisIndex: [0]
  //     },
  //     {
  //       id: 'dataZoomY',
  //       type: 'inside',
  //       yAxisIndex: [1]
  //     }
  //   ],
  //   tooltip: {
  //     trigger: 'axis',
  //     padding: [20],
  //     axisPointer: {
  //       type: 'cross'
  //     },
  //     backgroundColor: 'rgba(255, 255, 255, 0.9)',
  //     position: function (point, params, dom, rect, size) {
  //       // fixed at top
  //       return [point[0] + 20, point[1] + 20]
  //     },
  //     extraCssText: 'width: 170px',
  //     formatter: function (params) {
  //       const date = params[0].axisValue
  //       const load = params[0].data
  //       return `
  //         X: ${date} <br/>
  //         Y: ${load} <br/>
  //         Y/X: ${(load / date).toFixed(4)}
  //       `
  //     }
  //   },
  //   grid: {
  //     top: 60,
  //     left: 30,
  //     right: 60,
  //     bottom: 30
  //   },

  //   toolbox: {
  //     show: true,
  //     feature: {
  //       dataView: { readOnly: false },
  //       restore: {},
  //       saveAsImage: {},
  //       brush: {
  //         type: ['lineX', 'clear']
  //       }
  //     }
  //   },
  //   brush: {
  //     xAxisIndex: 'all',
  //     brushLink: 'all',
  //     outOfBrush: {
  //       colorAlpha: 0.1
  //     }
  //   },
  //   visualMap: {
  //     show: false,
  //     min: 0,
  //     max: 200,
  //     color: ['#f00', '#0f0']
  //   },
  //   title: {
  //     text: 'load - time'
  //   },
  //   xAxis: {
  //     type: 'category',
  //     data: timeArr,
  //     axisTick: { show: true, interval: 'auto' },
  //     minorTick: {
  //       show: false
  //     },
  //     axisPointer: {
  //       link: [
  //         {
  //           xAxisIndex: 'all'
  //         }
  //       ],
  //       label: {
  //         backgroundColor: '#777'
  //       }
  //     }
  //   },

  //   yAxis: {
  //     type: 'value',
  //     axisTick: { show: false },
  //     minorTick: {
  //       show: false
  //     },
  //     axisPointer: {
  //       link: [
  //         {
  //           xAxisIndex: 'all'
  //         }
  //       ],
  //       label: {
  //         backgroundColor: '#777'
  //       }
  //     }
  //   },
  //   animation: false,
  //   series: [
  //     {
  //       data: loadArr,
  //       type: 'line',
  //       showSymbol: false
  //     }
  //   ]
  // })

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
    <div className="flex h-full gap-1">
      <div className="w-1/5 border">
        <Speciments />
      </div>

      <div className="flex w-1/5 flex-col gap-1 border ">
        <div className="h-1/2 border">
          <CustomMethodVariables />
        </div>
        <div className="h-1/2 border">Show Ended Test values</div>
      </div>

      <div className="flex w-3/5 flex-col gap-1 border">
        <div className="min-h-[50%]  w-full border">
          <div className="flex gap-4 border p-2">
            <button
              onClick={() => {
                setShowElengation(false)
                setShowLoad(true)
              }}
            >
              Show Load
            </button>
            <button
              onClick={() => {
                setShowElengation(true)
                setShowLoad(false)
              }}
            >
              Show Elengation
            </button>
          </div>
          <ReactEcharts option={option} />
        </div>
        {settingsState.appearance.showRowData && (
          <div className="min-h-[50%] overflow-auto">
            <RowData />
          </div>
        )}
      </div>
    </div>
  )
}
export default Test
