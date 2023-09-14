import Home from "./Components/home/Home";
import Choice1 from "./Components/Start-login/login_for";
import Choice2 from "./Components/Start_sign-up/signup_for";
import P_Signup from "./Components/Patient_Sign_up/psignup";
import D_Signup from "./Components/Doctor_sign_up/d_signup";
import D_Login from "./Components/All_login/D_Login";
import P_Login from "./Components/All_login/p_Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/doctor_desboard/display/Deshboard";
import History_display from "./Components/doctor_desboard/display/History";
import PrescriptionDisplay from "./Components/doctor_desboard/display/PrescriptionDisplay";
import Reminderdisplay from "./Components/doctor_desboard/display/Reminderdisplay";
import App1 from "./Components/doctor_desboard/display/app1";
import App2 from "./Components/doctor_desboard/display/app2";
import App3 from "./Components/doctor_desboard/display/app3";
import PersonalInfo from "./Components/doctor_desboard/display/personal_info";
import PatientHistory from "./Components/doctor_desboard/display/Pat_history";
import AdminLogin from "./Components/Admin/Display/Admin_Login";
import AdminDashboard from "./Components/Admin/Display/Admin_Dashboard";
import AdminPatient from "./Components/Admin/Display/Admin_Patient";
import AdminUpdatePatient from "./Components/Admin/Display/Admin_Update_patient";
import AdminDoctor from "./Components/Admin/Display/Admin_Doctor";
import VerifiedDoctor from "./Components/Admin/Display/Verified_doctors";
import UnverifiedDoctor from "./Components/Admin/Display/Unverified_Doctor";
import AdminUpdateDoctor from "./Components/Admin/Display/Admin_update_doctor";
import Patient_Dashboard from "./Components/patient_deshboard/Display/patient_dashboard";
import Patient_Info from "./Components/patient_deshboard/Display/patient_info";
import Patient_App from "./Components/patient_deshboard/Display/patient_app";
import Patient_History from "./Components/patient_deshboard/Display/patient_history";
import DoctorOTP from "./Components/doctor_desboard/component/otp";
import PatientOTP from "./Components/patient_deshboard/P_Components/p_otp";
import DoctorSidePatHistory from "./Components/doctor_desboard/component/pat_history";
import AddPatient from "./Components/doctor_desboard/display/add_patient";
import Upload_Report from "./Components/patient_deshboard/Display/upload_report";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-up" element={<Choice2 />} />
      <Route path="/Sign-in" element={<Choice1 />} />
      <Route path="/Patient-Sign-up" element={<P_Signup />} />
      <Route path="/Doctor-Sign-up" element={<D_Signup />} />
      <Route path="/Doctor-login" element={<D_Login />} />
      <Route path="/Patient-login" element={<P_Login />} />
      <Route path="/Main-deshboard" element={<Main />} />
      <Route path="/History_dis" element={<History_display />} />
      <Route path="/pat_med_history " element={<PatientHistory />} />
      <Route path="/Prescription" element={<PrescriptionDisplay />} />
      <Route path="/Reminder_display" element={<Reminderdisplay />} />
      <Route path="/setting_appointments" element={<App1 />} />
      <Route path="/view_appointments_doc" element={<App2 />} />
      <Route path="/cancel_appointments" element={<App3 />} />
      <Route path="/doc_info" element={<PersonalInfo />} />
      <Route path="/Patient_Deshboard" element={<Patient_Dashboard />} />
      <Route path="/Patient_Info" element={<Patient_Info />} />
      <Route path="/Patient_App" element={<Patient_App />} />
      <Route path="/Patient_history" element={<Patient_History />} />
      <Route path="/d_otp_submission" element={<DoctorOTP />} />
      <Route path="/p_otp_submission" element={<PatientOTP />} />
      <Route path="/add_patient" element={<AddPatient />} />
      <Route path="/upload_report" element={<Upload_Report />} />

      {/* Admin routes */}
      <Route path="/admin_login" element={<AdminLogin />} />
      <Route path="/admin_dashboard" element={<AdminDashboard />} />
      <Route path="/admin_patient_data" element={<AdminPatient />} />
      <Route
        path="/admin_update_patient/:id"
        element={<AdminUpdatePatient />}
      />
      <Route path="/admin_doctor_data" element={<AdminDoctor />} />
      <Route path="/verified_doctor_data" element={<VerifiedDoctor />} />
      <Route path="/unverified_doctor_data" element={<UnverifiedDoctor />} />
      <Route path="/admin_update_doctor/:id" element={<AdminUpdateDoctor />} />
    </Routes>
  );
}

export default App;
