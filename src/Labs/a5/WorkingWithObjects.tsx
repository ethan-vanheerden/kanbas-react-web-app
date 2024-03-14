import { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "M1",
    name: "NodeJS Module",
    description: "NodeJS with ExpressJS",
    course: "C1",
  })

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);


  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
  const MODULE_URL = "http://localhost:4000/a5/module"

  return (
    <div>
      <h3>Working With Objects</h3>

      <h3>Modifying Properties</h3>
      <div className="d-flex mb-1">
        <input className="form-control" style={{width: 200}} onChange={(e) => setAssignment({
          ...assignment, title: e.target.value
        })}
          value={assignment.title} type="text" />
        <button className="btn btn-primary" onClick={updateTitle} >
          Update Title to: {assignment.title}
        </button>
      </div>
      <button className="btn btn-primary" onClick={fetchAssignment} >
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary me-1" href={ASSIGNMENT_URL}>
        Get Assignment
      </a>
      <a className="btn btn-primary" href={MODULE_URL}>
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary me-1" href={`${ASSIGNMENT_URL}/title`}>
        Get Title
      </a>
      <a className="btn btn-primary me-1" href={`${MODULE_URL}/name`}>
        Get Module Name
      </a>

      <h4>Modifying Properties</h4>
      <h5>Modifying the Assignment</h5>
      <div className="d-flex mb-1">
        <input className="form-control me-1" style={{ width: 200 }} type="text"
          onChange={(e) => setAssignment({
            ...assignment,
            title: e.target.value
          })}
          value={assignment.title} />
        <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
          Update Title
        </a>
      </div>
      <div className="d-flex mb-1">
        <input className="form-control me-1" style={{ width: 200 }} type="number"
          onChange={(e) => setAssignment({
            ...assignment,
            score: parseInt(e.target.value)
          })}
          value={assignment.score} />
        <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>
      <div className="d-flex mb-1">
        <input className="me-1" style={{ width: 100 }} type="checkbox" checked={assignment.completed}
          onChange={(e) => setAssignment({
            ...assignment,
            completed: e.target.checked
          })}
        />
        <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
      </div>

      <h5>Modifying the Module</h5>
      <div className="d-flex mb-1">
        <input className="form-control me-1" style={{ width: 200 }} type="text"
          onChange={(e) => setModule({
            ...module,
            name: e.target.value
          })}
          value={module.name} />
        <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
          Update Name
        </a>
      </div>
      <div className="d-flex mb-1">
        <input className="form-control me-1" style={{ width: 500 }} type="text"
          onChange={(e) => setModule({
            ...module,
            description: e.target.value
          })}
          value={module.description} />
        <a className="btn btn-primary" href={`${MODULE_URL}/description/${module.description}`}>
          Update Description
        </a>
      </div>
    </div>
  );
}
export default WorkingWithObjects;