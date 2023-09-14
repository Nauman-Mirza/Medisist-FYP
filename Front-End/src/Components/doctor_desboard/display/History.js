import React from "react";
import { Link } from "react-router-dom";
import History from "../component/med_history";
import Sidebar from "../component/sideBar";
import App from "../component/doctor_nav";
import AuthUser from "../../http/https";
import D_Login from "../../All_login/D_Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function History_display() {
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
      <Link to="/History_dis"></Link>
      <App />
      <Sidebar />
      <History />
    </>
  );
}

export default History_display;
