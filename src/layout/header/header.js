import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" className="logo-kasa" />
      <nav>
      <Link to="/" className="accueil">Accueil</Link>
      <Link to="/apropos" className="apropos">A propos</Link>
      </nav>
    </div>
  );
}
export default Header;
