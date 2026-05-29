import React from "react";
import HeaderBg from "../assets/header-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight, faCircleCheck, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import HeaderCar from "../assets/header-car.png"

const Landing = () => {
  return (
    <header>
      <div className="container">
        <img src={HeaderBg} alt="" className="header-bg"/>
        <div className="row header__row">
          <div className="header__text">
            <h2 className="header__text__subtitle">Plan your trip now</h2>
            <h1 className="header__text__title">
              Save <span className="color-primary">big</span> with our car
              rental
            </h1>
            <p className="header__text__para">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="header__text__btns">
                <button className="header__text__btn header__text__book">
                    <span className="header__text__btn__span">
                        book Ride
                    </span>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                </button>
                <button className="header__text__btn header__text__learn">
                    <span className="header__text__btn__span">
                        Learn more
                    </span>
                    <FontAwesomeIcon icon={faAngleRight} className="header__text__btn__icon"/>
                </button>
            </div>
          </div>
          <figure className="header__img__wrapper">
            <img src={HeaderCar} alt="" className="header__img" />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Landing;
