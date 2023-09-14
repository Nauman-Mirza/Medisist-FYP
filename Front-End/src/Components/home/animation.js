import "./animation.css";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Animation = () => {
  return (
    <div className="container6">
        <div className="con6-col">
          <h1> Your Medisist starts here</h1>
          <p>Enter into the world of ease with Medisist</p>
           <Link to="/Sign-up"><button className="con6-btn">
           Get Started
          </button>
          </Link>
        </div>
      </div>
  );
};

export default Animation;