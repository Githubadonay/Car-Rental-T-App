import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavLogo from "../assets/logo.png";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <a href="#" className="nav__img__wrapper">
            <img src={NavLogo} alt="" className="nav__img" />
          </a>

          <div className="nav__links">
            <a href="#" className="nav__link">
              Home
            </a>
            <a href="#" className="nav__link">
              Vehicle Models
            </a>
            <a href="#" className="nav__link disabled">
              Testimonials
            </a>
            <a href="#" className="nav__link disabled">
              Our Team
            </a>
            <a href="#" className="nav__link disabled">
              Contact
            </a>
          </div>

          <div className="nav__btns">
            <a href="#" className="nav__link disabled">
              Sign in
            </a>
            <button className="nav__btns__register disabled">Register</button>
          </div>
          <button className="nav__menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* <nav className="manu">
        <button className="menu__close">
            <FontAwesomeIcon  icon={faTimes}/>
        </button>
        <div className="manu__links">
            <a href="#" className="menu__link">Home</a>
            <a href="#" className="menu__link">Vehicle Models</a>
            <a href="#" className="menu__link">Testimonials</a>
            <a href="#" className="menu__link">Our Team</a>
            <a href="#" className="menu__link">Contact</a>
        </div>
    </nav> */}
    </>
  );
};

export default Nav;
