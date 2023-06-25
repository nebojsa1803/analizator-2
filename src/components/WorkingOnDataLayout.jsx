import { Outlet } from 'react-router-dom'
import WorkingOnDataNavbar from './WorkingOnDataNavbar/WorkingOnDataNavbar'

const WorkingOnDataLayout = () => {
  return (
    <div>
      <WorkingOnDataNavbar />
      <Outlet />
    </div>
  )
}

export default WorkingOnDataLayout
