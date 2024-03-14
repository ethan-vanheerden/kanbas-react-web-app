import { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const API = "http://localhost:4000/a5/todos";
  const [todos, setTodos] = useState<any[]>([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: any) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: string) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo: any) => {
    await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTodo = async () => {
    await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="d-flex">
        <input className="form-control me-1" style={{ width: 200 }} value={todo.id} type="number"
          onChange={(e) => setTodo({
            ...todo,
            id: parseInt(e.target.value)
          })} />
        <a className="btn btn-primary" href={`${API}/${todo.id}`}>
          Get Todo by ID
        </a>
      </div>
      <h4>Filtering array items using a query string</h4>
      <a className="btn btn-primary" href={`${API}/?completed=true`}>
        Get Completed Todos
      </a>

      <h3>Creating new Items in an Array</h3>
      <a className="btn btn-primary" href={`${API}/create`}>
        Create
      </a>

      <h3>Deleting from an Array</h3>
      <a className="btn btn-danger" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>

      <h3>Updating an Item in an Array</h3>
      <input className="form-control mb-1" type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })} />
      <a className="btn btn-primary mb-2" href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>

      <input className="form-control mb-1" type="text" value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value
        })} />
      <a className="btn btn-primary mb-2" href={`${API}/${todo.id}/description/${todo.description}`} >
        Update Description to {todo.description}
      </a>

      <div className="d-flex mb-1">
        <input className="me-1" style={{ width: 100 }} type="checkbox" checked={todo.completed}
          onChange={(e) => setTodo({
            ...todo,
            completed: e.target.checked
          })}
        />
        <a className="btn btn-primary mb-2" href={`${API}/${todo.id}/completed/${todo.completed}`}>
          Update Completed for Todo with ID = {todo.id}
        </a>
      </div>

      <h3>All the Todos</h3>
      <input className="form-control mb-1" type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value)
        })} />
      <input className="form-control mb-1" type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })} />

      <textarea className="form-control mb-1" value={todo.description}
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })} />
      <input className="form-control mb-1" value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })} />
      <label>
        <input className="me-1" checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })} />
        Completed
      </label>

      <div className="d-flex">
        <button className="btn btn-warning flex-grow-1 mb-1" onClick={postTodo}> Post Todo </button>
      </div>
      <div className="d-flex">
      <button className="btn btn-secondary flex-grow-1 mb-1" onClick={updateTodo}>
        Update Todo
      </button>
      </div>
      <div className="d-flex">
        <button className="btn btn-primary flex-grow-1 mb-1 me-1" onClick={createTodo} >
          Create Todo
        </button>
      </div>

      <div className="d-flex">
        <button className="btn btn-success flex-grow-1 mb-1" onClick={updateTitle} >
          Update Title
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <input className="me-1" checked={todo.completed}
                  type="checkbox" readOnly />
                {todo.title}
              </div>
              <p>{todo.description}</p>
              <p>{todo.due}</p>
              <div className="d-flex align-items-center">
                <button className="btn btn-danger me-2" onClick={() => deleteTodo(todo)}>
                  Delete
                </button>
                <button className="btn btn-danger me-2" onClick={() => removeTodo(todo)} >
                  Remove
                </button>
                <button className="btn btn-warning" onClick={() => fetchTodoById(todo.id)} >
                  Edit
                </button>
              </div>
            </div>

          </li>
        ))}
      </ul>


    </div>
  );
}
export default WorkingWithArrays;