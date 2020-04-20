import React from "react";
import { Link } from "react-router-dom";
import dateFormator from "../utils/dateFormator";

const Users = ({ users, onUpdateUserStatus }) => {
  return (
    <div class="container">
      <div class="row">
        <div className="table-responsive">
          <table className="table table-bordered table-striped mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Created</th>
                <th scope="col">Actions</th>
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
                        className="btn btn-outline-primary btn-table"
                        onClick={() => onUpdateUserStatus(user.id, user.status)}
                      >
                        {user.status === "locked" ? "Activate" : "Lock"}
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-table"
                        to={`/edit/?id=${user.id}&first=${user.first_name}&last=${user.last_name}`}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
