import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/project/account");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="form-group">
        <input
          className="form-control"
          value={user.username}
          onChange={(e) => setUser({
            ...user, username: e.target.value
          })} />
        <input
          className="form-control"
          value={user.password}
          onChange={(e) => setUser({
            ...user, password: e.target.value
          })} />
      </div>
      <button
        className="btn btn-primary w-100"
        onClick={signup}>
        Signup
      </button>
    </div>
  );
}