import "./option1.css";
import { Link } from "react-router-dom";
function Option1() {
  return (
    <div className="div-forlogin">
      <div className="login-main-div2">
        
        <div className="doctor-div-forlogin">
          <img src="images/medicine.gif" className="doc_logo_login"></img>
          <br></br>
          <Link to="/Doctor-login">
            <button className="btn_login">Doctor</button>
          </Link>
        </div>
        
        <div className="patient_div_forlogin">
          <img src="images/patient.gif" className="pat_logo_login"></img>
          <br></br>
          <Link to="/Patient-login">
            <button className="btn_login">Patient</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Option1;
