import { useState } from "react";

function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  return (
    <div>
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="form-control mb-2">
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} style={{ marginRight: '10px' }} />
        Done
      </label>
      {done && <div className="alert alert-success">
        Yay! you are done</div>}
    </div>
  );
}
export default BooleanStateVariables;