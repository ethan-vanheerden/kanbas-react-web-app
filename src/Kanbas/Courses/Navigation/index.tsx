import { Link, useLocation } from 'react-router-dom'
import './index.css' // feel free to use the CSS from previous assignments
import {
  FaBook,
  FaHome,
  FaRegLifeRing,
  FaPlug,
  FaRegFile,
  FaRegFolder,
  FaRegFileAlt,
  FaBullhorn,
  FaRocket,
  FaCircleNotch,
} from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { GoPeople } from 'react-icons/go'
import { FiMessageCircle, FiTarget } from 'react-icons/fi'

export const courseLinks = [
  { label: 'Home', icon: <FaHome /> },
  { label: 'Modules', icon: <FaRegLifeRing /> },
  { label: 'Piazza', icon: <FaPlug /> },
  { label: 'Zoom Meetings', icon: <FaPlug /> },
  { label: 'Assignments', icon: <FaBook /> },
  { label: 'Quizzes', icon: <FaRocket /> },
  { label: 'Grades', icon: <FaBook /> },
  { label: 'People', icon: <GoPeople /> },
  { label: 'Panopto Video', icon: <FaPlug /> },
  { label: 'Discussions', icon: <FiMessageCircle /> },
  { label: 'Announcements', icon: <FaBullhorn /> },
  { label: 'Pages', icon: <FaRegFileAlt /> },
  { label: 'Files', icon: <FaRegFolder /> },
  { label: 'Rubrics', icon: <FaRegFile /> },
  { label: 'Outcomes', icon: <FiTarget /> },
  { label: 'Collaborations', icon: <FaCircleNotch /> },
  { label: 'Syllabus', icon: <FaBook /> },
  { label: 'Settings', icon: <CiSettings /> },
]

function CourseNavigation() {
  const { pathname } = useLocation()
  return (
    <ul className="wd-navigation">
      {courseLinks.map((link, index) => (
        <li
          key={index}
          className={decodeURI(pathname).includes(link.label) ? 'wd-active' : ''}
        >
          <Link to={link.label}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}
export default CourseNavigation
