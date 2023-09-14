import "./why.css";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Why = () => {
  return (
    <div>
    <div className="container3a">
        <h1>Why Us?</h1>
    </div>
    <div className="container3b">
        <div className="con3-div1">
          <div className="con3-div1-row1">
            <h2>
              Wanted a system that easily defines medications for patients?
            </h2>
          </div>
          <div className="con3-div1-row2">
            <p>
              Most of the patients due to workload misses appointments with the
              doctor or face issues of the doctor’s bad handwriting on the
              prescription form and while appointments carrying bundles of files
              or paper including prescriptions and medical reports so if the
              patient loses some important documents or forgets to carry these
              documents it can become a big problem. So, in our web-based
              application, we are providing certain services to doctors and
              patients like digital prescription forms, maintaining a patient
              record that can be viewed by both the doctor and the patient
            </p>
          </div>
        </div>
        
        <div className="con3-div2">
          <img src="images\1.jpg" />
        </div>
        
      </div>
      </div>
  );
};

export default Why;