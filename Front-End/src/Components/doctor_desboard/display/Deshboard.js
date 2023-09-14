import React from "react";
import "./dashboard.css";
import Doctor_Nav from "../component/doctor_nav";
import Sidebar from "../component/sideBar";
import Welcome_main from "../component/welcome_main";
import AuthUser from "../../http/https";
import D_Login from "../../All_login/D_Login";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Main() {
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
    <div>
      <Link to={"/Main-deshboard"}></Link>
      <div className="app-container">
        <Doctor_Nav />
      </div>
      <div className="content">
        <Sidebar />
      </div>
      <Welcome_main />
    </div>
  );
}

export default Main;
