import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to={"/"} class="navbar-brand">
        Users
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li>
            <NavLink to={"/"} className="nav-link" exact={true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/new"} className="nav-link">
              Add User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
