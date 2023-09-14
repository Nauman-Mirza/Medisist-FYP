import "./cancel_app.css";
import AuthUser from "../../http/https";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
function CancelApp(props) {
  const { http } = AuthUser();
  const [appointments, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
  };

  const cancleAppointment = async (id) => {
    try {
      await http.post(`/doctors/doctorAppointmentsdelete/${id}`);
      toast.success("Appointment canceled successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      console.log(error);
      toast.error("Failed to cancel appointment");
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
            <h1>Cancel Appointments</h1>
          </div>

          <div className="cancel_app_table">
            {appointments.length === 0 ? (
              <div className="no_data">No appointments found.</div>
            ) : (
              <table className="table2">
                <tbody>
                  <tr className="t2-tr">
                    <th>S.No</th>
                    <th>Date & Time</th>
                    <th>Patient Name</th>
                    <th>Cancel</th>
                  </tr>
                  {appointments.map((appointment, index) => (
                    <tr className="t2-tr" key={index}>
                      <td className="t2-td">{index + 1}</td>
                      <td className="t2-td">{appointment.Appointment_Date}</td>
                      <td className="t2-td">{appointment.Patient_Name}</td>
                      <td className="t2-td">
                        <div className="cancel_app_btn">
                          <button
                            className="btn1-rem"
                            onClick={() => cancleAppointment(appointment.id)}
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default CancelApp;
