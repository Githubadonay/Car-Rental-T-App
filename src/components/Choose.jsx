import React from "react";
import ChooseCar from "../assets/choose-car.png";
import choose1 from "../assets/choose-1.png";
import choose2 from "../assets/choose-2.png";
import choose3 from "../assets/choose-3.png";
import ChooseFeature from "./ui/ChooseFeature";
import { Link} from "react-router-dom";
const Choose = () => {
  return (
    <section id="choose">
      <div className="container">
        <div className="row choose__row">
          <figure className="choose__img__wrapper">
            <img src={ChooseCar} alt="" className="choose__img" />
          </figure>
          <div className="choose__content">
            <div className="choose__text">
              <h3 className="choose__text__subtitle">Why Choose Us?</h3>
              <h2 className="choose__text__title">
                Best valued deals you will ever find
              </h2>
              <p className="choose__text__para">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <Link to="/models">
                <button className="choose__text__btn">Find Details</button>
              </Link>
            </div>
            <div className="choose__features">
              <ChooseFeature
                img={choose1}
                title="Cross Country Drive"
                para="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
              />
              <ChooseFeature
                img={choose2}
                title="All Inclusive Pricing"
                para="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
              />
              <ChooseFeature
                img={choose3}
                title="No Hidden Charges"
                para="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
