import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./p_sidebar.css";

function Patient_Sidebar() {
  const [activeOption, setActiveOption] = useState("dashboard"); // Initialize active option to "dashboard"

  // Function to handle click on an option
  const handleClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="slide-bar">
      <ul className="slide-bar-menu">
        <NavLink to={"/Patient_Deshboard"}>
          <li
            className={`slide-bar-item ${
              activeOption === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </li>
        </NavLink>
        <NavLink to={"/Patient_history"}>
          <li
            className={`slide-bar-item ${
              activeOption === "medical-history" ? "active" : ""
            }`}
            onClick={() => handleClick("medical-history")}
          >
            Medical History
          </li>
        </NavLink>
        <NavLink to={"/upload_report"}>
          <li
            className={`slide-bar-item ${
              activeOption === "upload-report" ? "active" : ""
            }`}
            onClick={() => handleClick("upload-report")}
          >
            Upload Report
          </li>
        </NavLink>
        <NavLink to={"/Patient_App"}>
          <li
            className={`slide-bar-item ${
              activeOption === "appointment" ? "active" : ""
            }`}
            onClick={() => handleClick("appointment")}
          >
            Appointment
          </li>
        </NavLink>
        <NavLink to={"/Patient_Info"}>
          <li
            className={`slide-bar-item ${
              activeOption === "personal-info" ? "active" : ""
            }`}
            onClick={() => handleClick("personal-info")}
          >
            Personal Info
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Patient_Sidebar;
