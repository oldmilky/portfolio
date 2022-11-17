import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo"><span className="header__span">OLD</span>MILKY</p>
        <div className="header__wrapper">
          <p className="header__text">About me</p>
          <p className="header__text">Services</p>
          <p className="header__text">Contact me</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
