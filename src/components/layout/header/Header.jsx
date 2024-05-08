import React from "react";
import "./header.scss";
import hamburger from "../../../assets/hamburger.svg";

const Header = ({ setShowModal }) => {
  function openModal() {
    setShowModal(true);
    console.log("ok");
    document.body.style.overflow = "hidden";
  }
  return (
    <header>
      <nav className="header__navbar container">
        <div className="nav__logo">
          <a href="#">LOGO</a>
        </div>
        <ul className="nav__list">
          <li className="nav__list__item">
            <a href="#" className="nav__list__link">
              Home
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#" className="nav__list__link">
              Service
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#" className="nav__list__link">
              Blog
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#" className="nav__list__link">
              Users
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#" className="nav__list__link">
              Shop
            </a>
          </li>
        </ul>
        <div className="nav__btns">
          <img className="hamburger" src={hamburger} alt="" />
          <button className="nav__btn">Contact</button>
          <button className="nav__btn" onClick={openModal}>
            Show card
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
