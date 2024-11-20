import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
