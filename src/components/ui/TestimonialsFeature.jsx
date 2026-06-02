import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialsFeature = ({ review, img, name, location }) => {
  return (
    <div className="testimonial">
      <p className="testimonial__review">{review}</p>
      <div className="testimonial__info">
        <figure className="testimonial__info__img__wrapper">
          <img src={img} alt="" className="testimonial__info__img" />
        </figure>
        <div className="testimonial__info__profile">
          <h4 className="testimonial__info__name">{name}</h4>
          <h5 className="testimonial__info__location">{location}</h5>
        </div>
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="testimonial__info__icon"
        />
      </div>
    </div>
  );
};

export default TestimonialsFeature;
