import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./a_sidebar.css";

function AdminSidebar() {
  const [activeOption, setActiveOption] = useState("dashboard"); // Initialize active option to "dashboard"

  // Function to handle click on an option
  const handleClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="slide-bar">
      <ul className="slide-bar-menu">
        <NavLink to={"/admin_dashboard"}>
        <li
          className={`slide-bar-item ${activeOption === "dashboard" ? "active" : ""}`}
          onClick={() => handleClick("dashboard")}
        >
          Dashboard
        </li>
        </NavLink>
        <NavLink to={"/admin_doctor_data"}>
        <li
          className={`slide-bar-item ${activeOption === "digital-prescription" ? "active" : ""}`}
          onClick={() => handleClick("digital-prescription")}
        >
          Doctor Data
        </li>
        </NavLink>
        <NavLink to={"/admin_patient_data"}>
        <li
          className={`slide-bar-item ${activeOption === "medical-history" ? "active" : ""}`}
          onClick={() => handleClick("medical-history")}
        >
          Patient Data
        </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default AdminSidebar;