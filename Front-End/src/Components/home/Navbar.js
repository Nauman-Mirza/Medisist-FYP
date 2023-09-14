import "./navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as LinkR, animateScroll as scroll } from 'react-scroll';

// const linkStyle  = styled(Link)`
//   textDecoration: "none";
//   &:focus, &:hover, &:visited, &:link, &:active {
//     text-decoration: none;
// }
// `;

const navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      <img className="logooo" src="logo.JPG" />
      </Link>
      <Link to="/Sign-in">
        <button className="btn1">SIGN IN</button>
      </Link>
      <LinkR to="mission-scroll" smooth={true} duration={1500} offset={-50}>
        <button className="btn1">ABOUT US</button>
      </LinkR>
      <LinkR to="service-scroll" smooth={true} duration={1500} offset={-50}>
        <button className="btn1">SERVICES</button>
      </LinkR>
    </nav>
  );
};

export default navbar;
