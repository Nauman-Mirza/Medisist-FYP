import React from "react";
import App from "../component/doctor_nav";
import Sidebar from "../component/sideBar";
import ViewAppDoc from "../component/view_app_doc";
import AuthUser from "../../http/https";
import D_Login from "../../All_login/D_Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App2() {
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
      <ViewAppDoc />
    </>
  );
}

export default App2;
