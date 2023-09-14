import './doctor_nav.css';
import { Link } from "react-router-dom";
import AuthUser from "../../http/https";
function Doctor_Nav() {
  const { token, logout } = AuthUser();

  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };




  return (
    <nav className="dash-navbar">
      <Link to="/Main-deshboard">
      <img className="doc_nav_logo" src="logo.JPG"/>
      </Link>
      <Link to="/Sign-in">
        <button className="logout_doc_btn" onClick={logoutUser}>Logout</button>
      </Link>
    </nav>
  );
};

export default Doctor_Nav;
