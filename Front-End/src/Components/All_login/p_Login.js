import "./d_login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import AuthUser from "../http/https";
import { useState } from "react";
function P_Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const submitform = () => {
    http
      .post("/patients/login", { email: email, password: password })
      .then((res) => {
        setToken(res.data.user, res.data.access_token);
        navigate("/p_otp_submission");
        // navigate("/Patient_Deshboard");
        
        window.location.reload(true);
      }).catch((error) => {
        if (error.response) {
          toast.error("Error: Please enter correct email and password");  
        } else {
          toast.error('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div className="body1">
      <div className="main-login">
        <div className="logo-login">
          <img className="logo1-login" src="logo.jpg" alt="logo"/>
        </div>

        <div className="doc-login-title">Medisist</div>

        <div className="login">Patient's Sign In</div>

        <div className="form">
          <label for="fname">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="fname"
          ></input>

          <label for="lname">Password</label>
          <input
            type="password"
            id="lname"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            name="lname"
          ></input>
        </div>

        <div className="buton">
            <button type="submit" className="buton1" onClick={submitform}>
              Sign In
            </button>
          <Link to="/Sign-up">
            <button className="buton2">Create Account</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default P_Login;
