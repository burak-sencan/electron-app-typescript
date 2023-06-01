import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import StatusBar from './StatusBar'

const Layout = () => {
  return (
    <div className="flex flex-col overflow-hidden h-full">
      <Navbar />
      <div className="p-4 h-full">
        <Outlet />
      </div>
      <div className='mt-auto'>
        <StatusBar />
      </div>
    </div>
  )
}
export default Layout
