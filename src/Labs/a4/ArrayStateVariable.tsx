import { useState } from "react";
import "./index.css";

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button className="btn btn-success mb-1" onClick={addElement}>Add Element</button>
      <ul className="list-group">
        {array.map((item, index) => (
          <li className="list-group-item wd-space-between" key={index}>
            {item}
            <button className="btn btn-danger" onClick={() => deleteElement(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;