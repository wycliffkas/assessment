import React from "react";
import { Link } from "react-router-dom";
import dateFormator from "./../utils/dateFormator";

const Users = ({ users, onUpdateUserStatus }) => {
  return (
    <div>
      <h4 className="center-text">Users</h4>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Created</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td className={user.status === "locked" ? "strike" : null}>
                  {user.first_name}
                </td>
                <td className={user.status === "locked" ? "strike" : null}>
                  {user.last_name}
                </td>
                <td className={user.status === "locked" ? "strike" : null}>
                  {dateFormator(user.created_at)}
                </td>
                <td>
                  <Link
                    to="/"
                    onClick={() => onUpdateUserStatus(user.id, user.status)}
                  >
                    {user.status === "locked" ? "Activate" : "Lock"}
                  </Link>
                </td>
                <td>
                  <Link to="/">Edit</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
