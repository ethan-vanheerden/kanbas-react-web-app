import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div className="ms-2 mt-1">
      <h1>Signin</h1>
      <input className="form-control mb-2" value={credentials.username} placeholder="Username" onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })} />
      <input className="form-control mb-2" value={credentials.password} placeholder="Password" onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })} />
      <button className="btn btn-primary w-100" onClick={signin}> Signin </button>
    </div>
  );
}
