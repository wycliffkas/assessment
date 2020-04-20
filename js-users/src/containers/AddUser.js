import React, { useState } from "react";
import axios from "axios";
import { notify } from "../utils/common";

const AddUser = () => {
  const [user, setUser] = useState({
    last_name: "",
    first_name: "",
    status: "active",
  });

  const updateUserState = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const saveUserHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("http://js-assessment-backend.herokuapp.com/users.json", user)
      .then((res) => {
        notify("success");
        setUser({
          last_name: "",
          first_name: "",
          status: "active",
        });
      })
      .catch((error) => {
        notify("failure");
        console.log("error", error);
      });
  };

  return (
    <div className="container mt-5 needs-validation" noValidate>
      <h5 className="center-text mt-3">Register New User</h5>
      <form className="content mt-3" onSubmit={saveUserHandler}>
        <div className="form-group">
          <label htmlFor="first name">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter first name"
            name="first_name"
            value={user.first_name}
            onChange={updateUserState}
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
            onChange={updateUserState}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm btn-block">
          Save User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
