import { Link, useLocation } from 'react-router-dom'
import './index.css' // feel free to use the CSS from previous assignments

export const courseLinks = [
  'Home',
  'Modules',
  'Piazza',
  'Zoom Meetings',
  'Assignments',
  'Quizzes',
  'Grades',
  'People',
  'Panopto Video',
  'Discussions',
  'Announcements',
  'Pages',
  'Files',
  'Rubrics',
  'Outcomes',
  'Collaborations',
  'Syllabus',
  'Settings',
]

function CourseNavigation() {
  const { pathname } = useLocation()
  return (
    <ul className="wd-navigation">
      {courseLinks.map((link, index) => (
        <li
          key={index}
          className={decodeURI(pathname).includes(link) ? 'wd-active' : ''}
        >
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  )
}
export default CourseNavigation;
