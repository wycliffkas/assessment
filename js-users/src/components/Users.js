import React from "react";
import Loader from "../utils/Loader";
import { Link } from "react-router-dom";
const Users = ({ users, loading }) => {
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.created_at}</td>
                <td>
                  <Link to="/">Activate</Link>
                </td>
                <td>
                  <Link to="/">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
