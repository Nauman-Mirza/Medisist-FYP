import './p_welcome.css';
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
function Patient_Welcome() {
  const [userdetail, setUserdetail] = useState("");
  const { http } = AuthUser();
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = () => {
    http.get("/patients/user-profile-patient").then((res) => {
      setUserdetail(res.data);
    });
  };
  return (
    <div class="doc_main">
        <img className='doc_img' src='images/patient.gif'/>
        <h1>Welcome to Medisist</h1>
        <p>{userdetail.First_Name} {userdetail.last_name} ({userdetail.id})</p>
    </div>
  );
}

export default Patient_Welcome;