import React from "react";
import App from "../component/doctor_nav";
import Sidebar from "../component/sideBar";
import SetApp from "../component/set_app";
import AuthUser from "../../http/https";
import D_Login from "../../All_login/D_Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App1() {
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
      {/* <Link to={"/Reminder_display"}></Link> */}
      <App />
      <Sidebar />
      <SetApp />
    </>
  );
}

export default App1;
