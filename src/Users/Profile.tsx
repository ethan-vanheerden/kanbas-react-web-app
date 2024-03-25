import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "", password: "",
    firstName: "", lastName: "", dob: "", email: "", role: "USER"
  });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };


  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile
        <button className="btn btn-primary" onClick={save}>
          Save
        </button>
      </h1>
      <Link to="/Kanbas/Account/Admin/Users"
        className="btn btn-warning w-100">
        Users
      </Link>
      {profile && (
        <div>
          <div className="form-group">
            <input className="form-control" value={profile.username} onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })} />
            <input className="form-control" value={profile.password} onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })} />
            <input className="form-control" value={profile.firstName} onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })} />
            <input className="form-control" value={profile.lastName} onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })} />
            <input className="form-control" value={profile.dob} type="date" onChange={(e) =>
              setProfile({ ...profile, dob: e.target.value })} />
            <input className="form-control" value={profile.email} onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })} />
            <select className="form-control" onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <button className="btn btn-danger w-100"
            onClick={signout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
