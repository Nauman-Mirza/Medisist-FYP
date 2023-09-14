import React, { useState } from "react";
import "./p_history.css"; // Import the external CSS file
import { useEffect } from "react";
import AuthUser from "../../http/https";
import { BeatLoader } from "react-spinners";

const PatientHistory = () => {
  const [prescription, setPrescription] = useState([]);
  const [reports, setReports] = useState([]);
  const [activeButton, setActiveButton] = useState([]);
  const [loading, setLoading] = useState(true);
  const { http } = AuthUser();
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  useEffect(() => {
    fetchPrescription();
    fetchReports();
  }, []);

  const fetchPrescription = async () => {
    try {
      const response = await http.get("/patients/showprescription");
      const data = response.data;
      setPrescription(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const fetchReports = async () => {
    try {
      const response = await http.get("/patients/Report_show");
      const data = response.data;
      setReports(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const [activeButtonreport, setActiveButtonReport] = useState([]);

  const handleButtonClickReport = (buttonId) => {
    setActiveButtonReport(buttonId === activeButtonreport ? null : buttonId);
  };

  return (
    <React.Fragment>
      {loading ? (
         <BeatLoader
         color="#1e90ff"
         className="loader1"
         size={30}
       />
      ) : (
        <>
          <div className="patient_history">
            <div className="history_title">
              <h1>Medical History</h1>
            </div>
            <div className="history_title_reports">Prescriptions</div>

            <div className="dropdown-container">
              {prescription.length === 0 ? (
                <div className="no_data">No prescriptions found.</div>
              ) : (
                prescription.map((item, index) => (
                  <React.Fragment key={index}>
                    <button
                      className={`dropdown-button ${
                        activeButton === index ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(index)}
                    >
                      {item.Prescription_Date}
                      <span
                        className={`dropdown-icon ${
                          activeButton === index ? "open" : ""
                        }`}
                      >
                        &#9660;
                      </span>
                    </button>
                    {activeButton === index && (
                      <div className="dropdown-content">
                        <table className="table9">
                          <tbody>
                            <tr className="t9-tr">
                              <th>Patient Name</th>
                              <td className="t9-td">{item.Patient_Name}</td>
                            </tr>
                            <tr className="t9-tr">
                              <th>Doctor Name</th>
                              <td className="t9-td">
                                Dr. {item.doctor.First_Name}{" "}
                                {item.doctor.last_name}
                              </td>
                            </tr>
                            <tr className="t9-tr">
                              <th>Diagnose</th>
                              <td className="t9-td">{item.Diagnose}</td>
                            </tr>
                            {JSON.parse(item.Medicines).map(
                              (medicine, medIndex) => (
                                <tr className="t9-tr" key={medIndex}>
                                  <th>Medicine No {medIndex + 1}</th>
                                  <td className="t9-td">
                                    {medicine.Medicine} ({medicine.Timing})
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </React.Fragment>
                ))
              )}
            </div>
          </div>

          <div className="patient_history_report">
            <div className="history_title_reports">Reports</div>

            <div className="dropdown-container">
              {reports.length === 0 ? (
                <div className="no_data">No Reports found.</div>
              ) : (
                reports.map((item, index) => (
                  <React.Fragment key={index}>
                    <button
                      className={`dropdown-button ${
                        activeButtonreport === index ? "active" : ""
                      }`}
                      onClick={() => handleButtonClickReport(index)}
                    >
                      {item.Report_Date}
                      <span
                        className={`dropdown-icon ${
                          activeButtonreport === index ? "open" : ""
                        }`}
                      >
                        &#9660;
                      </span>
                    </button>
                    {activeButtonreport === index && (
                      <div className="dropdown-content">
                        <img
                          className="img-thumbnail-report"
                          src={"http://localhost:8000/images/" + item.name}
                          alt={item.name}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};
export default PatientHistory;
