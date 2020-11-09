import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapperTop">
          <div className="footer-wrapperTopTrio">
            <div className="footer-wrapperTopTrioExplore">
              <h3>EXPLORE</h3>
              <p>Checkout out our website and our amazing products.</p>
              <ul>
                <li>Shop</li>
                <Link to="/Contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className="footer-wrapperTopTrioCustomer">
              <h3>CUSTOMER CARE</h3>
              <p>
                Read our policies to get answers regarding returns and more.
              </p>
              <ul>
                <Link to="/ReturnPolicy">
                  <li>Return Policy</li>
                </Link>
                <Link to="/PrivacyPolicy">
                  <li>Privacy Policy</li>
                </Link>
                <Link to="/TermsCondition">
                  <li>Terms and Condition</li>
                </Link>
              </ul>
            </div>
            <div className="footer-wrapperTopTrioContact">
              <h3>CONNECT WITH US</h3>
              <p>saytotushar@gmail.com </p>
              <div className="footer-wrapperIcons">
                <a
                  href="https://www.facebook.com/profile.php?id=100009263987412"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-2x contact-icons-style"></i>
                </a>
                <a
                  href="https://instagram.com/sharmatushar_?igshid=tysbfn3gju7z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x  contact-icons-style"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tushar-sharma-7a24961a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-2x  contact-icons-style"></i>
                </a>
                <a
                  href="mailto:saytotushar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-envelope fa-2x  contact-icons-style"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapperBottom">
          <div className="footer-wrapperBottomDuo">
            <p>Accepted Payments</p>
            <p className="copyright">CANVASP © 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
