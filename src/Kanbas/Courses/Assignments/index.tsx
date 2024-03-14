/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPlus,
} from 'react-icons/fa'
import { MdOutlineAssignment } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import assignments from '../../Database/assignments'
import './index.css'

function Assignments() {
  const { courseId } = useParams()
  const assignmentList = assignments.filter(
    (assignment:any) => assignment.course === courseId,
  )
  return (
    <>
      <div className="wd-assignments-header">
        <input
          className="wd-assignment-search"
          type="text"
          placeholder="Search for Assignment"
        ></input>
        <div className="d-flex">
          <button className="wd-course-button">
            <FaPlus className="me-1 mb-1" />
            Group
          </button>
          <button className="wd-course-button-red">
            <FaPlus className="me-1 mb-1" />
            Assignment
          </button>
          <button className="wd-course-button">
            <FaEllipsisV className="mb-1" />
          </button>
        </div>
      </div>
      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="wd-assignment-title">
            <div>
              <FaEllipsisV className="me-2 mb-1" /> ASSIGNMENTS
            </div>
            <div className="d-flex">
              <div className="wd-assignment-total">40% of Total</div>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </div>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment:any) => (
              <li className="list-group-item">
                <FaEllipsisV className="wd-assignment-block-icon me-2" />
                <MdOutlineAssignment className="wd-assignment-block-icon me-3 text-success" />

                <Link
                  className="wd-assignment"
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <div className="wd-assignment-subtitle">
                  <a className="wd-multiple-modules" href="javascript:void(0)">
                    Multiple Modules
                  </a>
                  {` | `}
                  {assignment.due_title}
                  {` | `}
                  {assignment.points_title}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  )
}
export default Assignments
