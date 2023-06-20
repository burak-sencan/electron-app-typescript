import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import StatusBar from './StatusBar'

const Layout = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Navbar />
      <div className="h-full">
        <Outlet />
      </div>
      <div className="mt-auto">
        <StatusBar />
      </div>
    </div>
  )
}
export default Layout
