import "./view_app_doc.css";
import AuthUser from "../../http/https";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

function ViewAppDoc() {
  const [appointments, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  const { http } = AuthUser();

  useEffect(() => {
    fetchAppointment();
  }, []);

  const fetchAppointment = async () => {
    try {
      const response = await http.get("/doctors/doctorAppointments");
      const data = response.data;
      setAppointment(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
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
              <table className="table1">
                <tr className="t1-tr">
                  <th className="t1-th">S.No</th>
                  <th className="t1-th">Date & Time</th>
                  <th className="t1-th">Patient Name</th>
                </tr>
                {appointments.map((appointment, index) => (
                  <tr key={index} className="t1-tr">
                    <td className="t1-td">{index + 1}</td>
                    <td className="t1-td">{appointment.Appointment_Date}</td>
                    <td className="t1-td">{appointment.Patient_Name}</td>
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

export default ViewAppDoc;
