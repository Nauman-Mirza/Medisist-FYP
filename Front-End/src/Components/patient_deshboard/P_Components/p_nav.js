import "./p_nav.css";
import { Link } from "react-router-dom";
import React from "react";
import AuthUser from "../../http/https";
function Patient_Nav() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    <nav className="dash-navbar">
      <Link to="/Patient_Deshboard">
      <img className="doc_nav_logo" src="logo.JPG" />
      </Link>
      <Link to="/Sign-in">
        <button className="logout_doc_btn" onClick={logoutUser}>
          Logout
        </button>
      </Link>
    </nav>
  );
}

export default Patient_Nav;
