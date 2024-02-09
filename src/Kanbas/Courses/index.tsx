import { courses } from '../../Kanbas/Database'
import {
  Navigate,
  Route,
  Routes,
  useParams,
  Link,
  useLocation,
} from 'react-router-dom'
import { HiMiniBars3 } from 'react-icons/hi2'
import { FaChevronDown } from 'react-icons/fa'
import CourseNavigation, { courseLinks } from './Navigation'
import '../styles.css'
import './index.css'
import Modules from './Modules'
import Home from './Home'
import { useState } from 'react'

function Courses() {
  const { courseId } = useParams()
  const location = useLocation()
  const path = decodeURI(location.pathname).split('/')
  const getBreadcrumb = () => {
    const breadcrumbTexts = courseLinks.filter((link) => path.includes(link))
    return breadcrumbTexts.length > 0 ? breadcrumbTexts[0] : ''
  }
  const breadcrumb = getBreadcrumb()

  const [collapsedKanbasNavOpen, setCollapsedKanbasNavOpen] = useState(false)
  const handleToggleCollapsedKanbasNav = () => {
    setCollapsedKanbasNavOpen((prevState) => !prevState)
  }

  const [collapsedCourseNavOpen, setCollapsedCourseNavOpen] = useState(false)
  const handleToggleCollapsedCourseNav = () => {
    setCollapsedCourseNavOpen((prevState) => !prevState)
  }

  const course = courses.find((course) => course._id === courseId)
  return (
    <div>
      <div
        className={`wd-kanbas-slide-nav ${
          collapsedKanbasNavOpen ? '' : 'wd-kanbas-slide-closed'
        }`}
      >
        HELLO
      </div>

      <div className="ms-4 d-none d-md-block">
        <div className="wd-course-title wd-fg-red">
          <HiMiniBars3 className="me-3" />
          <ul className="breadcrumb">
            <Link
              className="breadcrumb-item wd-breadcrumb-item first"
              to="Home"
            >
              {course?.number}
            </Link>
            <Link
              className="breadcrumb-item wd-breadcrumb-item active"
              to={breadcrumb}
            >
              {breadcrumb}
            </Link>
          </ul>
        </div>
        <hr />
      </div>
      <div className="d-md-none">
        <div className="wd-collapsed-navbar">
          <button
            className="icon-button"
            onClick={handleToggleCollapsedKanbasNav}
          >
            <HiMiniBars3 />
          </button>

          <div className="wd-nav-title text-center">
            {course?.name}
            <br />
            {breadcrumb}
          </div>
          <button
            className="icon-button"
            onClick={handleToggleCollapsedCourseNav}
          >
            <FaChevronDown />
          </button>
        </div>
      </div>
      <div
        className={`wd-course-slide-nav ${
          collapsedCourseNavOpen ? '' : 'wd-course-slide-closed'
        }`}
      >
        Collapsed Course Nav
      </div>
      <div className="d-flex" style={{ marginTop: collapsedCourseNavOpen ? '150px' : '0'}}>
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="ms-4 flex-grow-1 me-4">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default Courses
