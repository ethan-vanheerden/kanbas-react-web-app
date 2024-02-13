import { courseLinks } from '../index'
import { Link } from 'react-router-dom'
import './index.css'

type CollapsedCourseNavigationProps = {
  closeAction: () => void
}

function CollapsedCourseNavigation({
  closeAction,
}: CollapsedCourseNavigationProps) {
  return (
    <ul className="wd-collapsed-course-nav">
      {courseLinks.map((link, index) => (
        <li key={index}>
          <Link to={link.label} onClick={closeAction}>
            {link.icon}
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default CollapsedCourseNavigation
