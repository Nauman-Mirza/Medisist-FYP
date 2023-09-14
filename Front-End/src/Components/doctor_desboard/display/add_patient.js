import React from "react";
import { Link } from "react-router-dom";
import Digital_form from "../component/dig_pres_form";
import App from "../component/doctor_nav";
import Sidebar from "../component/sideBar";
import AuthUser from "../../http/https";
import D_Login from "../../All_login/D_Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DocAddPatient from "../component/d_add_patient";

function AddPatient() {
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
    return <D_Login />;
  }

  return (
    <>
      <Link to={"/Prescription"}></Link>
      <App />
      <Sidebar />
      <DocAddPatient />
    </>
  );
}

export default AddPatient;
