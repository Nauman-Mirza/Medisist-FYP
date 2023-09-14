import './a_welcome.css';
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";


function AdminWelcome() {
  const [userdetail, setUserdetail] = useState("");
  const { http } = AuthUser();
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = () => {
    http.get("/admins/user-profile").then((res) => {
      setUserdetail(res.data);
    });
  };
  return (
    <div class="doc_main">
        <img className='doc_img' src='images/Admin.gif'/>
        <h1>Welcome to Medisist</h1>
        <p>{userdetail.First_name} {userdetail.Last_name}</p>
    </div>
  );
}

export default AdminWelcome;