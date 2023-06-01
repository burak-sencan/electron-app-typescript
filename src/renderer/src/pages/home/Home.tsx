import { logout } from '@renderer/features/authSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Stage, Layer, Shape, Rect, Text, Circle, Line } from 'react-konva'

const Home = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-end p-2">
        <button onClick={handleLogout}> {t('logout')}</button>
      </div>
      {/* <Stage className="border" width={window.innerWidth - 10} height={window.innerHeight - 50}>
        <Layer>
          <Shape
            onClick={() => {
              console.log('elma')
            }}
            sceneFunc={(context, shape) => {
              context.beginPath()
              context.moveTo(0, 0)
              context.lineTo(220, 800)
              context.quadraticCurveTo(100, 200, 500, 200)
              context.closePath()
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape)
            }}
            fill="#000"
            stroke="black"
            strokeWidth={4}
          />
        </Layer>
      </Stage> */}

      <div className="flex gap-4 p-4">
        <Link className="center h-32 w-32 rounded-md border bg-slate-50" to="/dashboard/home-test">
          Test
        </Link>
        <Link
          className="center h-32 w-32 rounded-md border bg-slate-50"
          to="/dashboard/home-methods"
        >
          Methods
        </Link>
        <Link className="center h-32 w-32 rounded-md border bg-slate-50" to="/dashboard/results">
          Results
        </Link>
        <Link className="center h-32 w-32 rounded-md border bg-slate-50" to="/dashboard/settings">
          Settings
        </Link>
      </div>
    </div>
  )
}
export default Home
