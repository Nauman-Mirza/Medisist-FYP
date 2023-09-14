import "./option2.css";
import { Link } from "react-router-dom";

function Option2() {
  return (
    <div className="div-forsignup">
      <div className="signup-main-div2">
        
        <div className="doc-div-forsignup">
          <img src="images/medicine.gif" className="doc_logo_signup"></img>
          <br></br>
          <Link to="/Doctor-Sign-up">
            <button className="btn_signup">Doctor</button>
          </Link>
        </div>

        <div className="patient-div-forsignup">
          <img src="images/patient.gif" className="pat_logo_signup"></img>
          <br></br>
          <Link to="/Patient-Sign-up"><button className="btn_signup">
            Patient
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Option2;
