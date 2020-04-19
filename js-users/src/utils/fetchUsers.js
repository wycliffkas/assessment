import axios from "axios";
const fetchUsers = async (setUsers, setLoading) => {
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
export default fetchUsers;
