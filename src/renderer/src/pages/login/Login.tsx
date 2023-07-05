import LoginForm from './LoginForm'
import ReactEcharts from 'echarts-for-react'

const Login = () => {
  const optionHeader = {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            height: 8,
            text: 'T E S L A',
            fontFamily: 'sans-serif',
            fontSize: 96,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: 'white',
            lineWidth: '0'
          },
          keyframeAnimation: {
            duration: 3000,
            loop: false,
            keyframes: [
              {
                percent: 0.1,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 0,
                  lineDash: [20, 0]
                }
              },
              {
                percent: 0.3,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 0,
                  lineDash: [20, 0]
                }
              },

              {
                percent: 1,
                style: {
                  fill: '#fff'
                }
              }
            ]
          }
        }
      ]
    }
  }
  const optionSub = {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: 'Universal Testing Machine',
            fontSize: 24,
            fontWeight: '',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: 'white',
            lineWidth: '0'
          },
          keyframeAnimation: {
            duration: 8000,
            loop: false,
            keyframes: [
              {
                percent: 0.1,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 2000,
                  lineDash: [200, 0]
                }
              },
              {
                // Stop for a while.
                percent: 0.9,
                style: {
                  fill: '#bbb'
                }
              },
              {
                percent: 1,
                style: {
                  fill: '#fff'
                }
              }
            ]
          },
          animationEasing: 'quarticIn'
        }
      ]
    }
  }

  return (
    <div className=" home-gradient overflow-hidde relative flex h-screen items-center justify-center ">
      {/* <video className="h-screen w-screen bg-black" autoPlay loop muted>
        <source src={test} type="video/mp4" />
      </video> */}
      <div className=" mr-auto w-3/5 cursor-none">
        <ReactEcharts option={optionHeader} className="!cursor-context-menu" />
        <ReactEcharts option={optionSub} className="cursor-none" />
      </div>

      <div className="absolute right-0 flex h-full w-2/5 flex-col items-center justify-between gap-4 bg-black/50 p-4 text-yellow-500 backdrop-blur-sm transition  focus-within:bg-black/80">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
