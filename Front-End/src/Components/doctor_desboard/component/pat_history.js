// // import React, { useState } from 'react';
// // import './pat_history.css'; // Import the external CSS file

// // const DoctorSidePatHistory = (props) => {

  
  
// //   console.log(props);
// //   const [activeButton, setActiveButton] = useState([]);

// //   const handleButtonClick = (buttonId) => {
// //     setActiveButton(buttonId === activeButton ? null : buttonId);
// //   };

  
  
 
//   return (
//     // console.log(prescription)
//     <div className="patient_history">
//       <div className="history_title">
//         <h1>Medical History</h1>
//       </div>

//       <div className="dropdown-container">
//         {prescription.map((item, index) => (
//           <React.Fragment key={index}>
//             <button
//               className={`dropdown-button ${activeButton === index ? 'active' : ''}`}
//               onClick={() => handleButtonClick(index)}
//             >
//               {item.Prescription_Date}
//               <span className={`dropdown-icon ${activeButton === index ? 'open' : ''}`}>&#9660;</span>
//             </button>
//             {activeButton === index && (
//               <div className="dropdown-content">
//                 <table className="table9">
//                   <tbody>
//                     <tr className="t9-tr">
//                       <th>Patient Name</th>
//                       <td className="t9-td">{item.Patient_Name}</td>
//                     </tr>
//                     <tr className="t9-tr">
//                       <th>Doctor Name</th>
//                       <td className="t9-td">{item.doctor.First_Name} {item.doctor.last_name}</td>
//                     </tr>
//                     <tr className="t9-tr">
//                       <th>Diagnose</th>
//                       <td className="t9-td">{item.Diagnose}</td>
//                     </tr>
//                     {JSON.parse(item.Medicines).map((medicine, medIndex) => (
//                       <tr className="t9-tr" key={medIndex}>
//                         <th>Medicine No {medIndex + 1}</th>
//                         <td className="t9-td">{medicine.Medicine} ({medicine.Timing})</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// // };

// // export default DoctorSidePatHistory;