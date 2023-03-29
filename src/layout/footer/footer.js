import React from "react";
import "./footer.css";
import footerLogo from "../../assets/footerLogo.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer-logo" src={footerLogo} alt="logo blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
