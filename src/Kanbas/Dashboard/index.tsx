import { Link } from 'react-router-dom'
import { courses } from '../Database'
import { FaBook } from 'react-icons/fa'
import './index.css'
import '../styles.css'
import CollapsedKanbasNavigation from '../Navigation/Collapsed'

function Dashboard() {
  return (
    <div>
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
