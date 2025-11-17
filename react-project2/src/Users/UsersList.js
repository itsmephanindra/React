import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  let [users, setUsers] = useState([]);
  let [usersData, setUsersData] = useState([]);
  let searchText = "";

  useEffect(() => {
    async function getData() {
      let apiResponse = await axios.get("https://dummyjson.com/users");
      setUsers(apiResponse.data.users);
      setUsersData(apiResponse.data.users);
    }
    getData();
  }, []);

  function handleSearch(e) {
    searchText = e.target.value;
    let tempData = usersData.filter((user) =>
      user.firstName.toLowerCase().includes(searchText.toLowerCase())
    );
    setUsers([...tempData]);
  }

  function handleNameSort() {
    let tempData = users.sort((user1, user2) => {
      if (user1.firstName.toLowerCase() > user2.firstName.toLowerCase())
        return -1;
      else return 1;
    });
    setUsers([...tempData]);
  }

  function handleEmailSort() {
    let tempData = users.sort((user1, user2) => {
      if (user1.email.toLowerCase() > user2.email.toLowerCase()) return -1;
      else return 1;
    });
    setUsers([...tempData]);
  }

  function handleGenderSort() {
    let tempData = users.sort((user1, user2) => {
      if (user1.gender.toLowerCase() > user2.gender.toLowerCase()) return -1;
      else return 1;
    });
    setUsers([...tempData]);
  }
  function handleAgeSort() {
    let tempData = users.sort((user1, user2) => {
      return user2.age - user1.age;
    });

    setUsers([...tempData]);
  }

  async function handleDelete(e) {
    let apiResponse = await axios.delete("https://dummyjson.com/users/" + e.id);
    let tempData = users.filter((tempUser) => tempUser.id !== e.id);
    setUsers([...tempData]);
  }

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("");

  function handleEdit(e) {
    setName(e.firstName);
    setEmail(e.email);
    setAge(e.age);
    setGender(e.gender);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Search by name"
            className="form-control mt-3"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <table className="table table-hover table-bordered mt-3">
            <tbody>
              <tr>
                <th> User ID</th>
                <th onClick={(e) => handleNameSort()}> User name </th>
                <th onClick={(e) => handleEmailSort()}> Email id</th>
                <th onClick={(e) => handleGenderSort()}> Gender </th>
                <th onClick={(e) => handleAgeSort()}> Age </th>
                <th>Actions</th>
              </tr>

              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={(e) => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4 shadow">
          <label className="mb-2">Name</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            value={name}
          />

          <label className="mb-2">Email</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
          />

          <label className="mb-2">Age</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Age"
            value={age}
          />

          <label className="mb-2">Gender</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Gender"
            value={gender}
          />

          <button className="btn btn-success mt-2">Edit User</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UsersList;
