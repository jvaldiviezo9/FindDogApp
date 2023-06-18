import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src="/images/header__logo.png" alt="Logo" />
        <nav className="header__navbar">
          <Link to="/" className="header__navbar-link_home">
            <ul className="header__navbar-home">
              Home
            </ul>
          </Link>
          <Link to="/app" className="header__navbar-link_aplication">
            <button className="header__navbar-button">
              <ul className="header__navbar-aplication">App</ul>
            </button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
