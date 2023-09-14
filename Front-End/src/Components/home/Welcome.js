import "./Welcome.css";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Welcome = () => {
  return (
    <div>
      <div className="welcome">
        <h1 className="welcome1">Welcome to Medisist</h1>
        <h2 className="welcome2">Bringing the Future of Your Healthcare</h2>
        <Link to="/Sign-up">
        <button className="welcome-btn">Create an Account</button>
      </Link>
      </div>
      <div className="v1">
          <video src="video\DNA1a.mp4" autoPlay muted loop />
      </div>
      </div>
  );
};

export default Welcome;