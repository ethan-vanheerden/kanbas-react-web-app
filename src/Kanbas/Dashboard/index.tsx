import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { courses } from '../Database'
import { FaBook } from 'react-icons/fa'
import { HiMiniBars3 } from 'react-icons/hi2'
import './index.css'
import '../styles.css'
import CollapsedKanbasNavigation from '../Navigation/Collapsed'
import useCollapseNav from '../hooks/useCollapseNav'

function Dashboard() {
  const [collapsedKanbasNavOpen, setCollapsedKanbasNavOpen] = useState(false)
  const handleToggleCollapsedKanbasNav = () => {
    setCollapsedKanbasNavOpen((prevState) => !prevState)
  }

  useCollapseNav(() => {
    setCollapsedKanbasNavOpen(false)
  })

  return (
    <div>
      <div
        className={`wd-kanbas-slide-nav ${
          collapsedKanbasNavOpen ? '' : 'wd-kanbas-slide-closed'
        }`}
      >
        <CollapsedKanbasNavigation
          closeAction={handleToggleCollapsedKanbasNav}
        />
      </div>
      <div className="d-md-none">
        <div className="wd-collapsed-navbar">
          <button
            className="icon-button mb-4"
            onClick={handleToggleCollapsedKanbasNav}
          >
            <HiMiniBars3 />
          </button>

          <div className="wd-nav-title text-center pt-2">Dashboard</div>

          <div></div>
        </div>
      </div>
      <div className="p-4">
        <h1>Dashboard</h1> <hr />
        <h2>Published Courses (12)</h2> <hr />
        <div className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {courses.map((course) => (
              <div key={course._id} className="col wd-kanbas-course">
                <div className="card shadow">
                  <Link
                    className={`card-title wd-fg-${course.color} wd-bold`}
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <img
                      src={`/images/${course.image}`}
                      alt=""
                      className="card-img-top"
                      style={{ height: 150, minHeight: 150 }}
                    />
                  </Link>
                  <div className="card-body">
                    <Link
                      className={`card-title wd-fg-${course.color} wd-bold`}
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      {course.name}{' '}
                    </Link>
                    <p className="card-text">{course.number}</p>
                    <Link to={`/Kanbas/Courses/${course._id}/Assignments`}>
                      <div className="wd-kanbas-course-icons">
                        <FaBook />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
