import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import {
  faCalendarAlt,
  faCar,
  faLocationDot,
  faTimes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const Booking = ({
  carModels,
  bookingOpen,
  setBookingOpen,
  setSelectedModel,
  selectedModel,
  setSuccessOpen,
}) => {
  const [bookingLoading, setBookingLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setBookingLoading(true);

    setTimeout(() => {
      setBookingLoading(false);
      setBookingOpen(false);
      setSuccessOpen(true);
    }, 2000);

    setTimeout(() => {
      setSuccessOpen(false);
    }, 6000);
    console.log("form submitted");
  }

  return (
    <div className={`booking ${bookingOpen && "booking-open"}`}>
      <div className="booking__container">
        <button
          className="booking__close"
          onClick={() => setBookingOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className="booking__title">Book a Car</h3>
        <form
          className="booking__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCar} />
              <span>
                select Your Model<span className="required">*</span>
              </span>
            </label>
            <select
              className="form__item__select"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              {carModels.map((model) => (
                <option value={`${model.make} ${model.model}`} key={model.id}>
                  {model.make} {model.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Pick-up<span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select">
              <option value="" disabled>
                Select
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Drop-off<span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select">
              <option value="" disabled>
                Select
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Pick-up<span className="required">*</span>
              </span>
            </label>
            <input type="date" className="form__item__input" />
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Drop-off<span className="required">*</span>
              </span>
            </label>
            <input type="date" className="form__item__input" />
          </div>
          <div className="form__item">
            <button className="form__item__submit">
              {bookingLoading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="form__item__submit__loading"
                />
              ) : (
                "Book Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
