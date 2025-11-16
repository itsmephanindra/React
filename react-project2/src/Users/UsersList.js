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
      <table className="table table-hover table-bordered mt-3">
        <tbody>
          <tr>
            <th> User ID</th>
            <th onClick={(e) => handleNameSort()}> User name </th>
            <th onClick={(e) => handleEmailSort()}> Email id</th>
            <th onClick={(e) => handleGenderSort()}> Gender </th>
            <th onClick={(e) => handleAgeSort()}> Age </th>
          </tr>

          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UsersList;
