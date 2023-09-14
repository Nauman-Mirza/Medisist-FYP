import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

function Sidebar() {
  const [activeOption, setActiveOption] = useState("dashboard"); // Initialize active option to "dashboard"

  // Function to handle click on an option
  const handleClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="slide-bar">
      <ul className="slide-bar-menu">
        <NavLink to={"/Main-deshboard"}>
          <li
            className={`slide-bar-item ${
              activeOption === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </li>
        </NavLink>
        <NavLink to={"/History_dis"}>
          <li
            className={`slide-bar-item ${
              activeOption === "medical-history" ? "active" : ""
            }`}
            onClick={() => handleClick("medical-history")}
          >
            Medical History
          </li>
        </NavLink>
        <NavLink to={"/Prescription"}>
          <li
            className={`slide-bar-item ${
              activeOption === "digital-prescription" ? "active" : ""
            }`}
            onClick={() => handleClick("digital-prescription")}
          >
            Digital Prescription
          </li>
        </NavLink>
        <NavLink to={"/Reminder_display"}>
          <li
            className={`slide-bar-item ${
              activeOption === "appointment" ? "active" : ""
            }`}
            onClick={() => handleClick("appointment")}
          >
            Appointment
          </li>
        </NavLink>
        <NavLink to={"/add_patient"}>
          <li
            className={`slide-bar-item ${
              activeOption === "add-patient" ? "active" : ""
            }`}
            onClick={() => handleClick("add-patient")}
          >
            Add Patient
          </li>
        </NavLink>
        <NavLink to={"/doc_info"}>
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

export default Sidebar;
