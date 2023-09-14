import "./d_login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthUser from "../http/https";
import { useState } from "react";
function D_Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const navigate = useNavigate();
  const submitForm = () => {
    http
      .post("/doctors/login", { email: email, password: password })
      .then((res) => {
        setToken(res.data.user, res.data.access_token);
        navigate("/d_otp_submission");
        // navigate("/Main-deshboard");
        window.location.reload(true);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.error); 
          toast.error(error.response.data.message); 
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

        <div className="login">Doctor's Sign In</div>

        <div className="form">
          <label for="fname">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            id="fname"
            name="fname"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label for="lname">Password</label>
          <input
            type="password"
            id="lname"
            placeholder="Enter Password"
            name="lname"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="buton">
          <button className="buton1" onClick={submitForm}>
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

export default D_Login;
