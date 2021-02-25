import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Sidepannel = ({ formData, setFormData, handleFormSubmit }) => {
  const { revert, departure } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };

  const handleWay = (e) => {
    setFormData({
      ...formData,
      twoWay: e.target.name === "two-way" ? true : false,
    });
  };

  return (
    <form className="side" onSubmit={handleSubmit}>
      <div>
        <input
          className="flightButton"
          onChange={handleWay}
          type="button"
          value="One Way"
        />
      </div>
      <div>
        <input
          className="flightButton"
          onChange={handleWay}
          type="button"
          value="Return"
          name="two-way"
        />
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
        <div style={{"width":"5px"}}></div>
        <DatePicker
          selected={revert}
          onChange={(date) => setFormData({ ...formData, revert: date })}
          className="datepicker"
        />
      </div>
      <div>
        <input
          className="count-passenger"
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
