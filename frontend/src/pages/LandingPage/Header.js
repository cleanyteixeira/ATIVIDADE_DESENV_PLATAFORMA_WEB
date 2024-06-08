import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="topo">
      <div className="container">
        <div className="topo-titulo">
          <a href="/">
            <img
              className="topo-logo"
              src={logo}
              alt="Clínica Médica"
              title="Clínica Médica Life"
            />
          </a>
        </div>
        <nav className="topo-links">
          <NavLink to="/login"></NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
