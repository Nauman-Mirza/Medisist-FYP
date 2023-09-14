import "./a_patient_start.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
function AdPatientStart(prop) {
  const [patients, setPatient] = useState([]);
  const [loading, setLoading] = useState(true);
  const { http } = AuthUser();

  useEffect(() => {
    fetchAppointment();
  }, []);
  const fetchAppointment = async () => {
    try {
      const response = await http.get("/admins/adminpatient");
      const data = response.data;
      setPatient(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePatient = (id) => {
    http
      .post(`/admins/adminPatientdelete/${id}`)
      .then(() => {
        toast.success("Patient deleted successfully");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000); // Refresh after 5 seconds
      })
      .catch((error) => {
        toast.error("Failed to delete patient");
        console.log(error);
      });
  };
  // const updatePatient = (id) => {
  //   history.push(`/admin_update_patient/${id}`);
  // };
  return (
    <>
      {loading ? (
         <BeatLoader
         color="#1e90ff"
         className="loader1"
         size={30}
       />
      ) : (
        <div className="a_p_main">
          <div className="a_p_title">
            <h1>Patient's Data</h1>
          </div>

          <div className="a_p_table">
            <table className="table8">
              <tr className="t8-tr">
                <th className="t8-th">ID</th>
                <th className="t8-th">First Name</th>
                <th className="t8-th">Last Name</th>
                <th className="t8-th">Email</th>
                <th className="t8-th">DOB</th>
                <th className="t8-th">Mobile No</th>
                <th className="t8-th">CNIC</th>
                <th className="t8-th">Gender</th>
                <th className="t8-th">Update</th>
                <th className="t8-th">Cancel</th>
              </tr>
              {patients.map((patient, index) => (
                <tr className="t8-tr" key={index}>
                  <td className="t8-td">{patient.id}</td>
                  <td className="t8-td">{patient.First_Name}</td>
                  <td className="t8-td">{patient.last_name}</td>
                  <td className="t8-td">{patient.email}</td>
                  <td className="t8-td">{patient.Date_of_birth}</td>
                  <td className="t8-td">{patient.Mobile_number}</td>
                  <td className="t8-td">{patient.CNIC}</td>
                  <td className="t8-td">{patient.Gender}</td>
                  <td className="t8-td">
                    <div className="a_p_btn">
                      <a href={`/admin_update_patient/${patient.id}`}>
                        <button className="btn1-rem">Update</button>
                      </a>
                    </div>
                  </td>
                  <td className="t8-td">
                    <div className="a_p_btn">
                      <Link to={"/admin_patient_data"}>
                        <button
                          className="btn1-rem"
                          onClick={() => deletePatient(patient.id)}
                        >
                          Delete
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default AdPatientStart;
