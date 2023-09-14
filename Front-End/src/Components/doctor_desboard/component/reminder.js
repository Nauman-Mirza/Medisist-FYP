import './reminder.css';
import { Link } from "react-router-dom";

function Reminder() {
  return (
    <div className="app_main">
      
      <div className='app_title'>
      <h1>Appointment</h1>
      </div>

      <div className="app_btn">
      <div className='app1'>
      <Link to="/setting_appointments">
        <button className="app_btnn">Set Appointments</button>
      </Link>
      </div>
      <div className='app2'>
      <Link to="/view_appointments_doc">
        <button className="app_btnn">View Appointments</button>
      </Link>
      </div>
      <div className='app3'>
      <Link to="/cancel_appointments">
        <button className="app_btnn">Cancel Appointment</button>
      </Link>
      </div>
      </div>

    </div>
  );
}

export default Reminder;