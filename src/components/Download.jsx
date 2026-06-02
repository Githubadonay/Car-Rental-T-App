import React from "react";
import GooglePlay from "../assets/google-play.svg";
import AppleStore from "../assets/app-store.svg";

const Download = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row download__row">
          <div className="download__text">
            <h2 className="download__Text__title">
              Download our app to get most out of it
            </h2>
            <p className="download__text__para">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download__text__links">
              <a href="#" className="download__text__link">
                <img
                  src={GooglePlay}
                  alt="Google Play"
                  className="download__text__img"
                />
              </a>
              <a href="#" className="download__text__link">
                <img
                  src={AppleStore}
                  alt="App Store"
                  className="download__text__img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
