import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
    <div>
      <h2>Parent Component</h2>
      <h4>Counter {counter}</h4>
      <ChildStateComponent
        counter={counter}
        setCounter={setCounter} />
    </div>
  );
}
export default ParentStateComponent;