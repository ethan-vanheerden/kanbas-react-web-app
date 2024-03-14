import { useState, useEffect } from 'react'
import './index.css'
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
} from 'react-icons/fa'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { KanbasState } from '../../store'
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId, dispatch]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);

  const modulesInCourse = moduleList.filter((module) => module.course === courseId)
  const [selectedModule, setSelectedModule] = useState(modulesInCourse[0])

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
        <button type="button" className="wd-course-button">
          <FaEllipsisV className="mb-1" />
        </button>
      </div>
      <li className="list-group-item">
        <div className="d-flex">
          <div className="flex-grow-1">
            <input
              className="form-control mb-1"
              placeholder='Module Name'
              value={module.name}
              onChange={(e) => dispatch(setModule({
                ...module, name: e.target.value
              }))}
            />
            <textarea
              className="form-control"
              placeholder='Description'
              value={module.description}
              onChange={(e) => dispatch(setModule({
                ...module, description: e.target.value
              }))}
            />
          </div>
          <button
            className="wd-course-button ms-2 me-1"
            onClick={handleUpdateModule}>
            Update
          </button>

          <button
            className="wd-course-button-red"
            onClick={handleAddModule}
          >
            Add
          </button>
        </div>
      </li>

      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
            module && (
              <li
                className="list-group-item"
                onClick={() => setSelectedModule(module)}
              >
                <div className="wd-module-title-container">
                  <div>
                    <div className="d-flex">
                      <FaEllipsisV className="wd-module-title-ellipsis me-2" />
                      {module.name}
                    </div>
                    <div className="wd-module-description">
                      {module.description}
                    </div>
                  </div>

                  <div className="wd-module-title-buttons">
                    <button
                      className="wd-course-button"
                      onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button>

                    <button
                      className="wd-course-button-red"
                      onClick={() => {
                        if (module) {
                          handleDeleteModule(module._id)
                        }
                      }}>
                      Delete
                    </button>
                    <div className="wd-module-title-button-offset">
                      <FaCheckCircle className="text-success" />
                      <FaPlusCircle className="ms-2" />
                      <FaEllipsisV className="ms-2" />
                    </div>
                  </div>
                </div>
                {selectedModule && module && selectedModule._id === module._id && (
                  <ul className="list-group">
                    {module.lessons?.map((lesson: any) => (
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
            )
          ))
        }
      </ul>
    </>
  )
}
export default ModuleList
