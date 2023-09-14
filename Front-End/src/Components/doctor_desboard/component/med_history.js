import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
import "./pat_history.css";
import { ToastContainer, toast } from "react-toastify";

function History() {
  const [inputValue, setInputValue] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);
  const [reports, setReports] = useState([]);
  const { http } = AuthUser();
  useEffect(() => {
    setReports();
  }, []);
  const handleSearch = () => {
    const prescriptionPromise = http.get(
      `/doctors/doctorPrescription?p_id=${inputValue}`
    );
    const reportsPromise = http.get(
      `/doctors/Reportsshowdoctor?p_id=${inputValue}`
    );

    Promise.all([prescriptionPromise, reportsPromise])
      .then((responses) => {
        const [prescriptionResponse, reportsResponse] = responses;
        const prescriptionData = prescriptionResponse.data;
        const reportsData = reportsResponse.data;

        // Handle the data from each response separately
        setPrescriptions(prescriptionData);
        setReports(reportsData);
      })
      .catch((error) => {
        // Handle the error if necessary
        toast.error("Error: Please enter valid ID");
        console.error(error);
      });
  };

  const [activeButton, setActiveButton] = useState([]);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };
  const [activeButtonreport, setActiveButtonReport] = useState([]);

  const handleButtonClickReport = (buttonId) => {
    setActiveButtonReport(buttonId === activeButtonreport ? null : buttonId);
  };

  return (
    <>
      {prescriptions.length === 0 && (!reports || reports.length === 0) && (
        <div className="history_main">
          <div className="history_title">
            <h1>Patient's Medical History</h1>
          </div>

          <div className="form1">
            <label htmlFor="lname">Search by Patient's ID</label>
            <input
              type="number"
              id="p_id"
              placeholder="Enter Patient ID"
              name="p_id"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="btn-his">
            <button className="btn1-rem" onClick={handleSearch}>
              Search
            </button>
          </div>
          <ToastContainer />
        </div>
      )}

      {prescriptions.length > 0 && (
        <div className="patient_history">
          {/* <div className="history_title">
            <h1>Medical History</h1>
          </div> */}
          <div className="history_title_reports">Prescriptions</div>

          <div className="dropdown-container">
            {prescriptions.map((item, index) => (
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
                            Dr. {item.doctor.First_Name} {item.doctor.last_name}
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
            ))}
          </div>
        </div>
      )}
      {reports && reports.length > 0 && (
        <div className="patient_history_doc_report">
          <div className="history_title_reports">Reports</div>

          <div className="dropdown-container">
            {reports.map((item, index) => (
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
                  <div className="dropdown-content-img">
                    <img
                      className="img-thumbnail-report"
                      src={"http://localhost:8000/images/" + item.name}
                      alt={item.name}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default History;
