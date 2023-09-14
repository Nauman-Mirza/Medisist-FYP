import React from "react";
import "./footer.css";
import { Link, animateScroll as scroll } from 'react-scroll';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Medisist</h4>
            <ul>
              <li>
              <Link to="mission-scroll" smooth={true} duration={1500} offset={-50}>
                <a href="#">about us</a>
                </Link>
              </li>
              <li>
              <Link to="service-scroll" smooth={true} duration={1500} offset={-50}>
                <a href="#">our services</a>
              </Link>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">User Guide</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Online services</h4>
            <ul>
              <li>
                <a href="#">Patient guide</a>
              </li>
              <li>
                <a href="#">Doctor guide</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="social-links">
              <h4>Follow us</h4>
              <ul>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
