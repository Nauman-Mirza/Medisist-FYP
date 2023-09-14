import "./set_app.css";
import { Link } from "react-router-dom";
import AuthUser from "../../http/https";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SetApp() {
  const [inputs, setInputs] = useState({});
  const { http } = AuthUser();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    const data = {
      ...inputs,
    };
    console.log(data);
    http
      .post("/doctors/Appointments", data)
      .then((response) => {
        toast.success("Appointment added successfully");

        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      })
      .catch((error) => {
        toast.error("Error: Incomplete appointment. Please try again");
      });
  };
  return (
    <div className="app_main">
      <div className="app_title">
        <h1>Set Appointment</h1>
      </div>

      <div className="form1">
        <div className="form1a">
          <label for="fname">Patient Name*</label>
          <input
            type="text"
            placeholder="Enter Patient Name"
            id="p_name"
            name="p_name"
            value={inputs.p_name || ""}
            onChange={handleChange}
          ></input>
        </div>

        <div className="form1b">
          <label for="lname">Patient ID*</label>
          <input
            type="number"
            id="p_id"
            name="p_id"
            value={inputs.p_id || ""}
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className="form1">
        <label for="lname">Appointment Date*</label>
        <input
          type="datetime-local"
          id="app_date"
          name="app_date"
          value={inputs.app_date || ""}
          onChange={handleChange}
        ></input>
      </div>

      <div className="btn-rem">
        <button className="btn1-rem" onClick={submitForm}>
          Set
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SetApp;
