import "./show_unverified.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

function UnverifiedDoctorData(props) {
  const { http } = AuthUser();
  const [loading, setLoading] = useState(true);
  const [unverifiedDoctors, setUnverifiedDoctors] = useState([]);

  useEffect(() => {
    fetchDoctor();
  }, []);
  const fetchDoctor = async () => {
    try {
      const response = await http.get("/admins/admindoctor");
      const data = response.data;

      setUnverifiedDoctors(
        data.filter((doctor) => doctor.status === "pending")
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const acceptDoctor = async (id) => {
    try {
      await http.put(`/admins/admindoctorstatusupdate/${id}`, {
        status: "active",
      });
      toast.success("Doctor accepted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      console.log(error);
      toast.error("Failed to accept doctor");
    }
  };

  const rejectDoctor = async (id) => {
    try {
      await http.put(`/admins/admindoctorstatusupdate/${id}`, {
        status: "rejected",
      });
      toast.success("Doctor rejected successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      console.log(error);
      toast.error("Failed to reject doctor");
    }
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
        <div className="a_p_u_main">
          <div className="a_p_u_title">
            <h1>Unverified Doctor's Data</h1>
          </div>

          <div className="a_p_u_table">
            <table className="table6">
              <tr className="t6-tr">
                <th className="t6-th">ID</th>
                <th className="t6-th">First Name</th>
                <th className="t6-th">Last Name</th>
                <th className="t6-th">Email</th>
                <th className="t6-th">DOB</th>
                <th className="t6-th">Mobile No</th>
                <th className="t6-th">License No</th>
                <th className="t6-th">Gender</th>
                <th className="t6-th">Update</th>
                <th className="t6-th">Cancel</th>
              </tr>
              {unverifiedDoctors.map((doctor, index) => (
                <tr className="t6-tr" key={index}>
                  <td className="t6-td">{doctor.id}</td>
                  <td className="t6-td">{doctor.First_Name}</td>
                  <td className="t6-td">{doctor.last_name}</td>
                  <td className="t6-td">{doctor.email}</td>
                  <td className="t6-td">{doctor.Date_of_birth}</td>
                  <td className="t6-td">{doctor.Mobile_number}</td>
                  <td className="t6-td">{doctor.License_number}</td>
                  <td className="t6-td">{doctor.Gender}</td>
                  <td className="t6-td">
                    <div className="a_p_u_btn">
                      <Link to={"/unverified_doctor_data"}>
                        <button
                          className="btn1-rem"
                          onClick={() => acceptDoctor(doctor.id)}
                        >
                          Accept
                        </button>
                      </Link>
                    </div>
                  </td>
                  <td className="t6-td">
                    <div className="a_p_u_btn">
                      <Link to={"/unverified_doctor_data"}>
                        <button
                          className="btn1-rem"
                          onClick={() => rejectDoctor(doctor.id)}
                        >
                          Reject
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

export default UnverifiedDoctorData;
