import './a_doctor_start.css';
import { Link } from "react-router-dom";

function AdminDoctorStart() {
  return (
    <div className="a_d_main">
      
      <div className='a_d_title'>
      <h1>Doctor's Data</h1>
      </div>

      <div className="a_d_btn">
      <div className='ad1'>
      <Link to="/verified_doctor_data">
        <button className="ad_btnn">Verified Doctors</button>
      </Link>
      </div>
      <div className='ad2'>
      <Link to="/unverified_doctor_data">
        <button className="ad_btnn">Unverified Doctors</button>
      </Link>
      </div>
      </div>

    </div>
  );
}

export default AdminDoctorStart;