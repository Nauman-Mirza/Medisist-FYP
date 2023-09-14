import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../component/sideBar";
import App from "../component/doctor_nav";
import PerInfo from "../component/info";
import AuthUser from "../../http/https";
import D_Login from "../../All_login/D_Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {

  const { getToken } = AuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBrowserBackButton = () => {
      // Check if the user is logged in
      const isLoggedIn = getToken();

      if (isLoggedIn) {
        
        navigate("/Main-deshboard"); 
        
      }
      
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handleBrowserBackButton);

    return () => {
      window.removeEventListener("popstate", handleBrowserBackButton);
    };
  }, [getToken, navigate]);
  if (!getToken()) {
    return <D_Login/>
  } 
  return (
    <>
      <Link to="/History_dis"></Link>
      <App />
      <Sidebar />
      <PerInfo/>
    </>
  );
}

export default PersonalInfo;
