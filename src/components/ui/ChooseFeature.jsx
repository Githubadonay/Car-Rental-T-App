import React from "react";

const ChooseFeature = ({ img, title, para }) => {
  return (
    <div className="choose__feature">
      <figure className="choose__feature__img__wrapper">
        <img src={img} alt="" className="choose__feature__img" />
      </figure>
      <div className="choose__feature__text">
        <h4 className="choose__feature__text__title">{title}</h4>
        <p className="choose__feature__text__para">
          {para}
        </p>
      </div>
    </div>
  );
};

export default ChooseFeature;
