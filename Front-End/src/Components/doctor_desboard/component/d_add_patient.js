import "./d_add_patient.css";
import AuthUser from "../../http/https";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function DocAddPatient() {
  const { http } = AuthUser();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      if (!event.target.checked) {
        // Skip unchecked radio inputs
        return;
      }
    }

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    const data = {
      ...inputs,
      gender: inputs.gender || "",
    };
    http
      .post("/patients/register", data)
      .then(() => {
        toast.success("Patient registered successfully");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      })
      .then((response) => {
        setError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          toast.error('Error: Please enter correct information');
         
        } else {
          toast.error('Error: Please enter complete information'); 
        }
      });
  };
  return (
    <div className="main_add_patient">
      <div className="pres_title">
        <h1>Add Patient Form</h1>
      </div>

      <div className="form1">
        <div className="form1a">
          <label for="fname">First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            id="fname"
            name="fname"
            value={inputs.fname || ""}
            onChange={handleChange}
          ></input>
        </div>

        <div className="form1b">
          <label for="lname">Last Name*</label>
          <input
            type="text"
            id="lname"
            placeholder="Enter Last Name"
            name="lname"
            value={inputs.lname || ""}
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className="form1">
        <label for="lname">Email*</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form1">
        <label for="fname">Password*</label>
        <input
          type="password"
          placeholder="Enter Password"
          id="pass"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form1">
        <label for="lname">Date of Birth*</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={inputs.dob || ""}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form1">
        <div className="form1a">
          <label for="fname">Mobile Number*</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            id="m_num"
            name="m_num"
            value={inputs.m_num || ""}
            onChange={handleChange}
          ></input>
        </div>

        <div className="form1b">
          <label for="lname">CNIC*</label>
          <input
            type="text"
            id="cnic"
            placeholder="Enter CNIC Number"
            name="cnic"
            value={inputs.cnic || ""}
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className="form1">
        <label for="lname">Address*</label>
        <input
          type="text"
          id="add"
          placeholder="Enter Complete Address"
          name="add"
          value={inputs.add || ""}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form1">
        <label for="lname">Gender*</label>
      </div>
      <div className="form1">
        <div className="form1a">
          <input
            type="radio"
            id="r1"
            name="r1"
            value="Male"
            checked={inputs.r1 === "Male"}
            onChange={handleChange}
          ></input>{" "}
          Male
        </div>

        <div className="form1b">
          <input
            type="radio"
            id="r1"
            name="r1"
            value="Female"
            checked={inputs.r1 === "Female"}
            onChange={handleChange}
          ></input>{" "}
          Female
        </div>
      </div>
     

      <div className="btnnn">
        <button className="btnn1" onClick={submitForm}>
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DocAddPatient;
