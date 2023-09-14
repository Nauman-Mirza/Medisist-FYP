import React, { useState } from "react";
import "./dig_pres_form.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AuthUser from "../../http/https";
import { ToastContainer, toast } from "react-toastify";
function Digital_form() {
  const { http } = AuthUser();
  const [inputs, setInputs] = useState({});
  const [medicineFields, setMedicineFields] = useState([
    { id: 1, name: "", timing: [] },
  ]);

  const addMedicineField = () => {
    const newField = {
      id: medicineFields.length + 1,
      name: "",
      timing: [],
    };
    setMedicineFields([...medicineFields, newField]);
  };

  const handleMedicineNameChange = (index, event) => {
    const updatedFields = [...medicineFields];
    updatedFields[index].name = event.target.value;
    setMedicineFields(updatedFields);
  };

  const handleTimingChange = (index, timing, event) => {
    const updatedFields = [...medicineFields];
    const field = updatedFields[index];
    if (event.target.checked) {
      field.timing = [...field.timing, timing];
    } else {
      field.timing = field.timing.filter((item) => item !== timing);
    }
    setMedicineFields(updatedFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    const data = {
      medicineFields: medicineFields.map(({ name, timing }) => ({
        med: name,
        ch1: timing,
      })),
      ...inputs,
    };
    http
      .post("/doctors/prescriptioncontroller", data)
      .then((response) => {
        toast.success("Presciption added successfully");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
        // window.location.reload(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          toast.error(error.response.data.error); // Set the error message from Laravel's JSON response
        } else {
          toast.error("Error: Incomplete prescription. Please try again."); // Set a generic error message
        }
      });
  };

  return (
    <div className="pres-main1">
      <div className="pres_title">
        <h1>Digital Prescription Form</h1>
      </div>
      <div className="form1">
        <div className="form1a">
          <label htmlFor="fname">Patient Name*</label>
          <input
            type="text"
            placeholder="Enter Patient Name"
            id="p_name"
            name="p_name"
            value={inputs.p_name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form1b">
          <label htmlFor="lname">Prescription Date*</label>
          <input
            type="date"
            id="pre_date"
            name="pre_date"
            value={inputs.pre_date || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form1">
        <div className="form1a">
          <label htmlFor="fname">Patient ID*</label>
          <input
            type="number"
            placeholder="Enter First Name"
            id="p_id"
            name="p_id"
            value={inputs.p_id || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form1b">
          <label htmlFor="lname">Diagnose*</label>
          <input
            type="text"
            id="dia"
            placeholder="Enter Diagnose Name"
            name="dia"
            value={inputs.dia || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      {medicineFields.map((field, index) => (
        <div className="form1" key={field.id}>
          <div className="form1a">
            <label htmlFor={`med${index}`}>Medicine Name*</label>
            <input
              type="text"
              placeholder="Enter Medicine Name"
              id={`med${index}`}
              name={`med${index}`}
              value={field.name}
              onChange={(event) => handleMedicineNameChange(index, event)}
            />
          </div>
          <div className="form1b">
            <label htmlFor={`ch1${index}`}>Timing*</label>
            <br />
            <br />
            <input
              type="checkbox"
              id={`ch1${index}`}
              name={`ch1${index}`}
              onChange={(event) => handleTimingChange(index, "Morning", event)}
            />
            Morning
            <input
              type="checkbox"
              id={`ch2${index}`}
              name={`ch2${index}`}
              onChange={(event) =>
                handleTimingChange(index, "Afternoon", event)
              }
            />
            Afternoon
            <input
              type="checkbox"
              id={`ch3${index}`}
              name={`ch3${index}`}
              onChange={(event) => handleTimingChange(index, "Night", event)}
            />
            Night
          </div>
        </div>
      ))}
      <div className="add-med-btn">
        <button className="add-med-btn1" onClick={addMedicineField}>
          Add Medicine &nbsp;
          <i className="fa fa-plus"></i>
        </button>
      </div>

      <div className="form1">
        <div className="form1c">
          <label htmlFor="fname">Recommendation*</label>
          <textarea
            className="recom"
            name="rec"
            value={inputs.rec || ""}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="btn-pre">
        <button className="btn1-pre" onClick={submitForm}>
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Digital_form;
