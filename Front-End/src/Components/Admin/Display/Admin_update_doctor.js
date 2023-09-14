import React from "react";
import AdminNav from "../Components/a_nav";
import AdminSidebar from "../Components/a_sidebar";
import DoctorUpdateForm from "../Components/update_doctor_form";
import AuthUser from "../../http/https";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminLogin from "./Admin_Login";
function AdminUpdateDoctor() {
  const { getToken } = AuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBrowserBackButton = () => {
      // Check if the user is logged in
      const isLoggedIn = getToken();

      if (isLoggedIn) {
        navigate("/admin_dashboard"); // Redirect to the home page or any other authorized page
      }
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handleBrowserBackButton);

    return () => {
      window.removeEventListener("popstate", handleBrowserBackButton);
    };
  }, [getToken, navigate]);
  if (!getToken()) {
    return <AdminLogin />;
  }
  return (
    <>
      <AdminNav />
      <AdminSidebar />
      <DoctorUpdateForm />
    </>
  );
}

export default AdminUpdateDoctor;
