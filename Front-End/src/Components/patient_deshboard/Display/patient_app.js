import React from "react";
import Patient_Nav from "../P_Components/p_nav";
import Patient_Sidebar from "../P_Components/p_sidebar";
import P_App from "../P_Components/p_app";
import AuthUser from "../../http/https";
import P_Login from "../../All_login/p_Login"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Patient_App() {
  const { getToken } = AuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBrowserBackButton = () => {
      // Check if the user is logged in
      const isLoggedIn = getToken();

      if (isLoggedIn) {
        navigate("/Patient_Deshboard"); // Redirect to the home page or any other authorized page
      }
      
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handleBrowserBackButton);

    return () => {
      window.removeEventListener("popstate", handleBrowserBackButton);
    };
  }, [getToken, navigate]);
  if (!getToken()) {
    return <P_Login />;
  }
  return (
    <div>
      <Patient_Nav/>
      <Patient_Sidebar/>
      <P_App/>
    </div>
  );
}

export default Patient_App;
