import { Link } from 'react-router-dom'
import { useState } from 'react'
import db from '../Database'
import { FaBook } from 'react-icons/fa'
import { HiMiniBars3 } from 'react-icons/hi2'
import './index.css'
import '../styles.css'
import CollapsedKanbasNavigation from '../Navigation/Collapsed'
import useCollapseNav from '../hooks/useCollapseNav'

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  color: string;
};

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse
}:
  {
    counter: number;
    setCounter: (counter: number) => void;
  }) {
  const [collapsedKanbasNavOpen, setCollapsedKanbasNavOpen] = useState(false)
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../../images/reactjs.jpg", color: "blue"
  });

  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString()
    };
    setCourses([...courses, { ...course, ...newCourse }]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const handleToggleCollapsedKanbasNav = () => {
    setCollapsedKanbasNavOpen((prevState) => !prevState)
  }

  useCollapseNav(() => {
    setCollapsedKanbasNavOpen(false)
  })

  return (
    <div>
      <div
        className={`wd-kanbas-slide-nav ${collapsedKanbasNavOpen ? '' : 'wd-kanbas-slide-closed'
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
        <h5>Add or Edit a Course</h5>
        <input value={course.name} className="form-control mb-1"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control mb-1"
          onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control mb-1" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control mb-1" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        <button className="wd-course-button-red" onClick={addNewCourse} >
          Add
        </button>
        <button className="wd-course-button" onClick={updateCourse} >
          Update
        </button>

        <h2>Published Courses (7)</h2> <hr />
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
                    <div className="wd-course-buttons-bottom">
                      <Link to={`/Kanbas/Courses/${course._id}/Assignments`}>
                        <div className="wd-kanbas-course-icons">
                          <FaBook />
                        </div>
                      </Link>

                      <div className="justify-content-end wd-edit-delete-buttons">
                        <button className="wd-course-button"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}>
                          Edit
                        </button>

                        <button className="wd-course-button"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}>
                          Delete
                        </button>
                      </div>
                    </div>
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
