import "./Info.css";
import React, { useState, useEffect } from "react";
import AuthUser from "../../http/https";
import { BeatLoader } from "react-spinners";
function PerInfo() {
  const [userdetail, setUserdetail] = useState("");
  const [loading, setLoading] = useState(true);
  const { http } = AuthUser();
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = async () => {
    await http.get("/doctors/user-profile").then((res) => {
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
            <table className="table3">
              <tr className="t3-tr">
                <th>ID</th>
                <td className="t3-td">{userdetail.id}</td>
              </tr>
              <tr className="t3-tr">
                <th>Name</th>
                <td className="t3-td">
                  {userdetail.First_Name} {userdetail.last_name}
                </td>
              </tr>
              <tr className="t3-tr">
                <th>Email</th>
                <td className="t3-td">{userdetail.email}</td>
              </tr>
              <tr className="t3-tr">
                <th>License No</th>
                <td className="t3-td">{userdetail.License_number}</td>
              </tr>
              <tr className="t3-tr">
                <th>Mobile No</th>
                <td className="t3-td">{userdetail.Mobile_number}</td>
              </tr>
              <tr className="t3-tr">
                <th>DOB</th>
                <td className="t3-td">{userdetail.Date_of_birth}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default PerInfo;
