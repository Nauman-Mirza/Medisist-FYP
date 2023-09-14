import "./update_patient_form.css";

import AuthUser from "../../http/https";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function PatientUpdateForm(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const { http } = AuthUser();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get("/admins/adminPatient/" + id + "/edit").then((res) => {
      setInputs({
        fname: res.data.First_Name,
        lname: res.data.last_name,
        email: res.data.email,
        dob: res.data.Date_of_birth,
        m_num: res.data.Mobile_number,
        cnic: res.data.CNIC,
        add: res.data.Address,
      });
    });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "radio") {
      if (!event.target.checked) {
        return;
      }
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    const data = {
      ...inputs,
    };
    http.put("/admins/adminPatient/update/" + id, data).then((res) => {
      navigate("/admin_patient_data");
    });
  };
  return (
    <div className="pat_update">
      <div className="a_pat_update_title">
        <h1>Patient's Edit Form</h1>
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

      {/* <div className="form1">
        <label for="fname">Password*</label>
        <input
          type="text"
          placeholder="Enter Password"
          id="pass"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleChange}
        ></input>
      </div> */}

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

      {/* <div className="form1">
        <label for="lname">Gender*</label>
      </div>
      <div className="form1">
        <div className="form1a">
          <input
            type="radio"
            id="r1"
            name="r1"
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
            checked={inputs.r1 === "Female"}
            onChange={handleChange}
          ></input>{" "}
          Female
        </div>
      </div> */}

      <div className="btnnn">
        {/* <Link to="/admin_patient_data"> */}
        <button className="btnn1" onClick={() => submitForm(id)}>
          Submit
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default PatientUpdateForm;
