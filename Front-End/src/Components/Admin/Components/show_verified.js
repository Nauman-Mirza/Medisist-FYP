import "./show_verified.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
function VerifiedDoctorData() {
  const [doctors, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const { http } = AuthUser();
  const [verifiedDoctors, setVerifiedDoctors] = useState([]);

  useEffect(() => {
    fetchDoctor();
  }, []);
  const fetchDoctor = async () => {
    try {
      const response = await http.get("/admins/admindoctor");
      const data = response.data;
      setDoctor(data);
      setVerifiedDoctors(data.filter((doctor) => doctor.status === "active"));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteDoctor = (id) => {
    http
      .post(`/admins/adminDoctordelete/${id}`)
      .then(() => {
        toast.success("Doctor deleted successfully");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000); // Refresh after 5 seconds
      })
      .catch((error) => {
        toast.error("Failed to delete doctor");
        console.log(error);
      });
  };
  return (
    <>
      {loading ? (
         <BeatLoader
         color="#1e90ff"
         className="loader1"
         size={30}
       />
      ) : (
        <div className="a_p_v_main">
          <div className="a_p_v_title">
            <h1>Verified Doctor's Data</h1>
          </div>

          <div className="a_p_v_table">
            <table className="table7">
              <tr className="t7-tr">
                <th className="t7-th">ID</th>
                <th className="t7-th">First Name</th>
                <th className="t7-th">Last Name</th>
                <th className="t7-th">Email</th>
                <th className="t7-th">DOB</th>
                <th className="t7-th">Mobile No</th>
                <th className="t7-th">License No</th>
                <th className="t7-th">Gender</th>
                <th className="t7-th">Update</th>
                <th className="t7-th">Cancel</th>
              </tr>
              {verifiedDoctors.map((doctor, index) => (
                <tr className="t7-tr" key={index}>
                  <td className="t7-td">{doctor.id}</td>
                  <td className="t7-td">{doctor.First_Name}</td>
                  <td className="t7-td">{doctor.last_name}</td>
                  <td className="t7-td">{doctor.email}</td>
                  <td className="t7-td">{doctor.Date_of_birth}</td>
                  <td className="t7-td">{doctor.Mobile_number}</td>
                  <td className="t7-td">{doctor.License_number}</td>
                  <td className="t7-td">{doctor.Gender}</td>
                  <td className="t7-td">
                    <div className="a_p_v_btn">
                      <a href={`/admin_update_doctor/${doctor.id}`}>
                        <button className="btn1-rem">Update</button>
                      </a>
                    </div>
                  </td>
                  <td className="t7-td">
                    <div className="a_p_v_btn">
                      <button
                        className="btn1-rem"
                        onClick={() => deleteDoctor(doctor.id)}
                      >
                        Delete
                      </button>
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

export default VerifiedDoctorData;
