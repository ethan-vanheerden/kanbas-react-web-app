import ConditionalOutput from "./ConditionalOutput";
import Classes from "./css/Classes";
import Styles from "./css/Styles";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Add from "./Add";
import PathParameters from "./routing/PathParameters";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
      <Add a={3} b={4} />
    </div>
  );
}
export default Assignment3;