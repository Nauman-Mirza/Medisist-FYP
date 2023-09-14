import React, { useState } from "react";
import AuthUser from "../../http/https";
import "./upload_rep.css";
import { ToastContainer, toast } from "react-toastify";

function Report() {
  const { http } = AuthUser();
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", image);
    data.append("date", date);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    http
      .post("/patients/Reports_upload", data, config)
      .then((res) => {
        toast.success("Report uploaded successfully");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      })
      .catch((error) => {
        toast.error("Error: Incomplete feilds in Report. Please try again ");
      });
  };

  return (
    <div className="report_upload_main">
      <div className="report_upload_main_title">
        <h1>Upload Report</h1>
      </div>
      <form className="report_upload_main" onSubmit={submitForm}>
        <div className="form1">
          <div className="form1a">
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              placeholder="Enter Date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className="form1">
          <div className="button-wrap">
            <label className="button" htmlFor="upload">
              Upload File
            </label>
            <input
              id="upload"
              type="file"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="btn-pre">
          <button className="btn1-pre" type="submit">
            Upload
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Report;
