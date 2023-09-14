import "./p_app.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
import { BeatLoader } from "react-spinners";
function P_App() {
  const [appointments, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  const { http } = AuthUser();

  useEffect(() => {
    fetchAppointment();
  }, []);
  const fetchAppointment = async () => {
    try {
      const response = await http.get("/patients/Appointments");
      const data = response.data;
      setAppointment(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
        <div className="app_main">
          <div className="app_title">
            <h1>Appointments</h1>
          </div>

          {appointments.length === 0 ? (
            <div className="no_data">No appointments found.</div>
          ) : (
            <div className="view_app_table">
              <table className="table5">
                <tr className="t5-tr">
                  <th>S.No</th>
                  <th>Date & Time</th>
                  <th>Doctor Name</th>
                </tr>
                {appointments.map((appointment, index) => (
                  <tr key={index} className="t1-tr">
                    <td className="t5-td">{index + 1}</td>
                    <td className="t5-td">{appointment.Appointment_Date}</td>
                    <td className="t5-td">
                      Dr. {appointment.doctor.First_Name}{" "}
                      {appointment.doctor.last_name}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default P_App;
{
  /* <th>Doctor Name</th> */
}
// <td className='t5-td'>Dr. {appointment.doctor.First_Name}{" "}
//         {appointment.doctor.last_name}</td>

// <div className="app_main">

//   <div className='app_title'>
//   <h1>Appointments</h1>
//   </div>

//   <div className='view_app_table'>
//     <table className='table5'>
//       <tr className='t5-tr'>
//         <th>S.No</th>
//         <th>Date & Time</th>
//       </tr>
//       {appointments.map((appointment, index) => (
//       <tr key={index} className='t5-tr'>
//         <td className='t5-td'>{index + 1}</td>
//         <td className='t5-td'>{appointment.Appointment_Date}</td>
//         </tr>
//         ))}
//     </table>
//   </div>
// </div>
