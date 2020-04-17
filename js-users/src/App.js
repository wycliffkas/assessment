import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users";
import Pagination from "./components/Pagination";
import Loader from "./utils/Loader";
import "./assets/css/style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://js-assessment-backend.herokuapp.com/users.json"
      );
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber.selected + 1);

  return (
    <div className="container mt-5">
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Users users={currentUsers} loading={loading} />
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

export default App;
