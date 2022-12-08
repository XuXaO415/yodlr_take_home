import React from "react";
import { Link } from "react-router-dom";

// if admin simple navbar with link to admin page else if user navbar with link to user page

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/admin">Admin</Link>
      <Link to="/user">User</Link>
    </div>
  );
}

export default Navbar;
