import "./p_info.css";
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
import { BeatLoader } from "react-spinners";
function P_Info() {
  const [userdetail, setUserdetail] = useState("");
  const [loading, setLoading] = useState(true);
  const { http } = AuthUser();
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = async () => {
    await http.get("/patients/user-profile-patient").then((res) => {
      setUserdetail(res.data);
      setLoading(false);
    });
  };

  return (
    <>
      {loading ? (
       <BeatLoader
       color="#1e90ff"
       className="loader1"
       size={30}
     />
      ) : (
        <div className="app_main">
          <div className="app_title">
            <h1>Personal Information</h1>
          </div>
          <div className="per_info_table">
            <table className="table4">
              <tr className="t4-tr">
                <th>ID</th>
                <td className="t4-td">{userdetail.id}</td>
              </tr>
              <tr className="t4-tr">
                <th>Name</th>
                <td className="t4-td">
                  {userdetail.First_Name} {userdetail.last_name}
                </td>
              </tr>
              <tr className="t4-tr">
                <th>Email</th>
                <td className="t4-td">{userdetail.email}</td>
              </tr>
              <tr className="t4-tr">
                <th>CNIC</th>
                <td className="t4-td">{userdetail.CNIC}</td>
              </tr>
              <tr className="t4-tr">
                <th>Mobile No</th>
                <td className="t4-td">{userdetail.Mobile_number}</td>
              </tr>
              <tr className="t4-tr">
                <th>DOB</th>
                <td className="t4-td">{userdetail.Date_of_birth}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default P_Info;

//      <div className="app_main">

//   <div className="app_title">
//     <h1>Personal Information</h1>
//   </div>

//   <div className="per_info_table">
//     <table className="table4">
//       <tr className="t4-tr">
//         <th>ID</th>
//         <td className="t4-td">{userdetail.id}</td>
//       </tr>
//       <tr className="t4-tr">
//         <th>Name</th>
//         <td className="t4-td">
//           {userdetail.First_Name} {userdetail.last_name}
//         </td>
//       </tr>
//       <tr className="t4-tr">
//         <th>Email</th>
//         <td className="t4-td">{userdetail.email}</td>
//       </tr>
//       <tr className="t4-tr">
//         <th>CNIC</th>
//         <td className="t4-td">{userdetail.CNIC}</td>
//       </tr>
//       <tr className="t4-tr">
//         <th>Mobile No</th>
//         <td className="t4-td">{userdetail.Mobile_number}</td>
//       </tr>
//       <tr className="t4-tr">
//         <th>DOB</th>
//         <td className="t4-td">{userdetail.Date_of_birth}</td>
//       </tr>
//     </table>
//   </div>
// </div>
