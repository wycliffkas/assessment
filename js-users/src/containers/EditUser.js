import React, { useState, useEffect } from "react";
import axios from "axios";
import { notify } from "../utils/common";

const EditUser = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    setUser({
      ...user,
      id: params.get("id"),
      last_name: params.get("last"),
      first_name: params.get("first"),
    });
  }, []);

  const updateUserDetails = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onEditUser = async (event) => {
    event.preventDefault();
    await axios({
      method: "PUT",
      mode: "CORS",
      url: `http://js-assessment-backend.herokuapp.com/users/${user.id}.json`,
      data: user,
    })
      .then((response) => {
        console.log("user successfully updated", response);
        notify("success");
        setUser({});
      })
      .catch((error) => {
        notify("failure");
        console.log("error", error);
      });
  };

  return (
    <div className="container mt-5 needs-validation" noValidate>
      <h5 className="center-text mt-3">Edit User Details</h5>
      <form className="content mt-3" onSubmit={onEditUser}>
        <div className="form-group">
          <label htmlFor="first name">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter first name"
            name="first_name"
            value={user.first_name}
            onChange={updateUserDetails}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter last name"
            name="last_name"
            value={user.last_name}
            onChange={updateUserDetails}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm btn-block">
          Edit User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
