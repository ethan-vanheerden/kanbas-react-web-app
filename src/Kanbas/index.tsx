import KanbasNavigation from './Navigation'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import './styles.css'
import Courses from './Courses'

function Kanbas() {
  return (
    <div className="d-flex">
      <div className="d-none d-md-block">
        <KanbasNavigation />
      </div>
      <div className="d-none d-md-block wd-kanbas-nav-offset"></div>
      <div className="wd-kanbas-content">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1 className="ms-4">Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  )
}
export default Kanbas
