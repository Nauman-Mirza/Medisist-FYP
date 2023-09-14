import "./a_nav.css";
import { Link } from "react-router-dom";
import AuthUser from "../../http/https";
import logo from "../../../cartimages/logo.jpg"
function AdminNav() {
  const { token, logout } = AuthUser();

  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };

  return (
    <nav className="dash-navbar">
      <Link to="/admin_dashboard">
      <img className="doc_nav_logo" src={logo} />
      </Link>
      <Link to="/admin_login">
        <button className="logout_doc_btn" onClick={logoutUser}>Logout</button>
      </Link>
    </nav>
  );
}

export default AdminNav;
