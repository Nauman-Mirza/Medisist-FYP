import './welcome_main.css';
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";

function Welcome_main() {

  const [userdetail, setUserdetail] = useState("");
  const { http } = AuthUser();
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = () => {
    http.get("/doctors/user-profile").then((res) => {
      setUserdetail(res.data);
    });
  };
  return (
    <div class="doc_main">
        <img className='doc_img' src='images/Medicine.gif'/>
        <h1>Welcome to Medisist</h1>
      <p>Dr. {userdetail.First_Name} {userdetail.last_name} ({userdetail.id })</p>
    </div>
  );
}

export default Welcome_main;