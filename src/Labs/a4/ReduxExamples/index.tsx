import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

function ReduxExamples() {
  return (
    <div>
      <h1>Redux Examples</h1>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}
export default ReduxExamples;