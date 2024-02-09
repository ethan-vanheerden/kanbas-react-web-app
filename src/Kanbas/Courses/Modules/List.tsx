import { useState } from 'react'
import './index.css'
import { modules } from '../../Database'
import {
  FaEllipsisV,
  FaPlus,
  FaCheckCircle,
  FaPlusCircle,
} from 'react-icons/fa'
import { useParams } from 'react-router'

function ModuleList() {
  const { courseId } = useParams()
  const modulesList = modules.filter((module) => module.course === courseId)
  const [selectedModule, setSelectedModule] = useState(modulesList[0])
  return (
    <>
      <div className="d-flex wd-course-buttons">
        <button type="button" className="wd-course-button">
          Collapse All
        </button>
        <button type="button" className="wd-course-button">
          View Progress
        </button>
        <select id="publish" className="wd-course-select">
          <option selected>Publish All</option>
        </select>
        <button type="button" className="wd-course-button-red">
          <FaPlus className="mb-1" /> Module
        </button>
        <button type="button" className="wd-course-button">
          <FaEllipsisV className="mb-1" />
        </button>
      </div>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ModuleList
