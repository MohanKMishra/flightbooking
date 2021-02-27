import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Sidepannel.css";

const Sidepannel = ({
  formData,
  setFormData,
  handleFormSubmit,
  manageFormSubmit,
}) => {
  const { revert, departure, twoWay } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
    manageFormSubmit();
  };

  const handleWay = (e) => {
    setFormData({
      ...formData,
      twoWay: e.target.name === "two-way" ? true : false,
    });
  };

  return (
    <form className="side" onSubmit={handleSubmit}>
      <div className="option_choose">
        <div>
          <input
            className="flight_button"
            onClick={handleWay}
            type="button"
            value="One Way"
          />
        </div>
        <div>
          <input
            className="flight_button"
            onClick={handleWay}
            type="button"
            value="Return"
            name="two-way"
          />
        </div>
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Enter Origin City"
          onChange={handleChange}
          name="origin"
        />
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Enterhe Destination City"
          onChange={handleChange}
          name="destination"
        />
      </div>
      <div className="date-input-wrapper">
        <DatePicker
          selected={departure}
          onChange={(date) => setFormData({ ...formData, departure: date })}
          className="datepicker"
        />
      </div>
      {twoWay && (
        <div>
          <DatePicker
            selected={revert}
            onChange={(date) => setFormData({ ...formData, revert: date })}
            className="datepicker"
          />
        </div>
      )}
      <div>
        <input
          className="count_passenger"
          type="number"
          placeholder="Passengers"
          onChange={handleChange}
        />
      </div>

      <input className="button" type="submit" value="Search" />
    </form>
  );
};

export default Sidepannel;
