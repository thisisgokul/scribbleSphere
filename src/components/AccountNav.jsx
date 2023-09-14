import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const AccountNav = () => {
  return (
    <nav className="w-full d-flex justify-content-center flex-wrap my-4 gap-4">
      <Link className="p-2 account-section" to="/profile">
        My Profile
      </Link>
      <Link className={`p-2 account-section `} to="/mypost">
        My Post
      </Link>
      <Link className={`p-2 account-section `} to="/addpost">
        Add Post
      </Link>
    </nav>
  );
};

export default AccountNav;
