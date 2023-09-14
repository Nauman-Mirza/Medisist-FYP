import "./d_signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import AuthUser from "../http/https";
import { useState } from "react";

function D_Signup() {
  const { http } = AuthUser();
  const [inputs, setInputs] = useState({});
  

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
      .post("/doctors/register", data)
      .then(() => {
        
        toast.success("Doctor created successfully!");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
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
      <div className="main-d-signup">
        <div className="logo-d-signup">
          <img className="logo1-d-signup" src="logo.jpg" />
        </div>

        <div className="doc-signup-title">Medisist</div>

        <div className="doc-signup-title1">Doctor's Sign Up</div>

        <div className="form1">
          <div className="form1a">
            <label for="fname">First Name</label>
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
            <label for="lname">Last Name</label>
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
          <label for="lname">Email</label>
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
          <label for="fname">Password</label>
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
            <label for="lname">License Number*</label>
            <input
              type="text"
              id="l_num"
              placeholder="Enter License Number"
              name="l_num"
              value={inputs.l_num || ""}
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

        <div className="butn">
          <Link to="/Doctor-Sign-up">
            <button className="butn1" onClick={submitForm}>
              {" "}
              Submit
            </button>
          </Link>
          <Link to="/Doctor-login">
            <button className="butn2"> Sign In</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default D_Signup;
