import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../helpers/api";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.id}</p>
            <button>Delete User</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
