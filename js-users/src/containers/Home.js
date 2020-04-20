import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "../components/Users";
import Pagination from "../components/Pagination";
import Loader from "../utils/Loader";
import fetchUsers from "../utils/fetchUsers";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    fetchUsers(setUsers, setLoading);
  }, []);

  const updateUserStatus = async (userId, status) => {
    let data = null;
    if (status === "active") {
      data = {
        status: "locked",
      };
    } else {
      data = {
        status: "active",
      };
    }

    await axios({
      method: "PUT",
      mode: "CORS",
      url: `http://js-assessment-backend.herokuapp.com/users/${userId}.json`,
      data,
    })
      .then((response) => {
        console.log("user successfully updated", response);
      })
      .catch((error) => console.log(error));

    for (let user of users) {
      if (user.id === userId) {
        status === "active"
          ? (user.status = "locked")
          : (user.status = "active");
        break;
      }
    }

    setUsers([]);
    setUsers(users);
  };

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber.selected + 1);

  return (
    <div className="container mt-3">
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Users users={currentUsers} onUpdateUserStatus={updateUserStatus} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
