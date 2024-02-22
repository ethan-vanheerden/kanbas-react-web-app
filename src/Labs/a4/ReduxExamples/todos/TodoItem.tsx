import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({ todo }: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item wd-normal-flex">
      <div className="flex-grow-1">
        {todo.title}
      </div>
      <button className="btn btn-primary me-2" onClick={() => dispatch(setTodo(todo))}>
        Edit </button>
      <button className="btn btn-danger" onClick={() => (dispatch(deleteTodo(todo.id)))}>
        Delete </button>
    </li>
  );
}
export default TodoItem;