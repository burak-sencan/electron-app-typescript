import ReactEcharts from 'echarts-for-react'
import { useEffect, useState } from 'react'

import { ResponsiveLine } from '@nivo/line'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Bar
} from 'recharts'

const Test = () => {
  const [elengation, setElengation] = useState<number[]>([0])
  const [load, setLoad] = useState<number[]>([0])
  const [timeArr, setTimeArr] = useState<number[]>([0])
  const [time, setTime] = useState<number>(0)

  const [ShowElengation, setShowElengation] = useState(false)
  const [showLoad, setShowLoad] = useState(true)

  const [option, setOption] = useState<any>({
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

      position: function (point, params, dom, rect, size) {
        // fixed at top
        return [point[0] + 20, point[1] + 20]
      },
      extraCssText: 'width: 170px'
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
        show: true,
        type: 'shadow',
        status: 'show'
      }
    },

    yAxis: {
      type: 'value',
      axisTick: { show: false },
      minorTick: {
        show: false
      },
      axisPointer: {
        show: true,
        type: 'shadow',
        status: 'show'
      }
    },
    animation: false,
    series: [
      {
        data: load,
        type: 'line'
      }
    ]
  })

  // let option = {
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
  //     extraCssText: 'width: 170px'
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
  //       show: true,
  //       type: 'shadow',
  //       status: 'show'
  //     }
  //   },

  //   yAxis: {
  //     type: 'value',
  //     axisTick: { show: false },
  //     minorTick: {
  //       show: false
  //     },
  //     axisPointer: {
  //       show: true,
  //       type: 'shadow',
  //       status: 'show'
  //     }
  //   },
  //   animation: false,
  //   series: [
  //     {
  //       data: load,
  //       type: 'line'
  //     }
  //   ]
  // }

  const addRandomData = () => {
    const newTimeArr = [...timeArr, time]
    const newLoad = [...load, time * 2 + Math.floor(Math.random() * 50)]
    const newElengation = [...elengation, Math.floor(Math.random() * 10)]

    setLoad(newLoad)
    setElengation(newElengation)
    setTime(time + 1)
    setTimeArr(newTimeArr)

    if (showLoad) {
      setOption((prevOption) => ({
        ...prevOption,
        xAxis: {
          ...prevOption.xAxis,
          data: newTimeArr
        },
        series: [
          {
            ...prevOption.series[0],
            data: newLoad
          }
        ]
      }))
    } else if (ShowElengation) {
      setOption((prevOption) => ({
        ...prevOption,
        xAxis: {
          ...prevOption.xAxis,
          data: newTimeArr
        },
        series: [
          {
            ...prevOption.series[0],
            data: newElengation
          }
        ]
      }))
    }

    // setOption((prevOption) => ({
    //   ...prevOption,
    //   xAxis: {
    //     ...prevOption.xAxis,
    //     data: newTimeArr
    //   },
    //   series: [
    //     {
    //       ...prevOption.series[0],
    //       data: newLoad
    //     }
    //   ]
    // }))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      addRandomData()
    }, 100)

    return () => clearInterval(timer)
  })

  return (
    <div className="flex h-full gap-1">
      <div className="w-1/5 border">Speciments</div>

      <div className="flex w-1/5 flex-col gap-1 border ">
        <div className="h-1/2 border">Custom Method Variables</div>
        <div className="h-1/2 border">Show Ended Test values</div>
      </div>

      <div className="flex w-3/5 flex-col gap-1 border">
        <div className="h-1/2  w-full border">
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
        <div className=" h-1/2 border">Row Data</div>
      </div>

      {/* NIVO */}
      {/* 
      <div className="hidden h-1/2  ">
        <ResponsiveLine
          data={[
            {
              id: 'nivo',
              data: dataNivo
            }
          ]}
          enablePoints={false}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div> */}

      {/* RECHARTS */}
      {/* <ResponsiveContainer height="40%">
        <LineChart
          width={730}
          height={250}
          data={dataRechart}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="time" />
          <YAxis dataKey="load" />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            legendType="circle"
            dot={false}
            activeDot={{ stroke: 'red', strokeWidth: 1, r: 5 }}
            dataKey="load"
            stroke="#8884d8"
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer> */}
    </div>
  )
}
export default Test
