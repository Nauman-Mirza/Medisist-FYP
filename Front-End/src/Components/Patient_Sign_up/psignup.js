import "./p_signup.css";
import AuthUser from "../http/https";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
function P_Signup() {
  const { http } = AuthUser();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);
  

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
        toast.success("Patient created successfully!");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      })
      .then((response) => {
        setError(null);
      })
      .catch((error) => {
        if (error.response) {
          toast.error('Error: Please enter correct information');
          
        } else {
          toast.error('Error: Please enter complete information'); 
        }
      });
  };
  return (
    <div className="body2">
      <div className="main-p-signup">
        <div className="main-p-logo">
          <img className="main-p-logo1" src="logo.jpg" alt="logo" />
        </div>

        <div className="pat-signup-title">Medisist</div>

        <div className="pat-signup-title1">Patient's Sign Up</div>

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
        {/* this is for error message */}
        {error && (
          <div className="error-popup">
            <span className="error-message">{error}</span>
          </div>
        )}
        
        <div className="btnnn">
          <Link to="/Patient-Sign-up">
            <button className="btnn1" onClick={submitForm}>
              Submit
            </button>
          </Link>
          <Link to="/Patient-login">
            <button className="btnn2">Sign In</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default P_Signup;
