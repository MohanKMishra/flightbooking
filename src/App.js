import React, { useState } from "react";
import moment from "moment";

import "./App.css";
import data from "./assets/data.json";
import Sidepannel from "./components/Sidepannel";
import Home from "./components/Home";

const App = () => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departure: new Date(),
    revert: new Date(),
    people: "",
    twoWay: true,
  });
  console.log(formData.origin);
  const { revert, departure } = formData;

  const [filteredFlight, setFilteredFlight] = useState([]);

  const handleFormSubmit = () => {
    setFilteredFlight(
      data.filter(
        (e) =>
          formData.origin.toLowerCase() === e.originCity.toLowerCase() &&
          formData.destination.toLowerCase() === e.destCity.toLowerCase()
      )
    );
  };

  return (
    <div className="App">
      <div className="navbar">Flight Search Engine</div>
      <div className="body container">
        <Sidepannel
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
        />
        <div className="handleBody">
          <div className="header container">
            <div className="travel-info">
              {formData.origin}
              {" > "}
              {formData.destination}
            </div>
            <div className="datedesign">
              <div className="depart">
                <span>Depart :</span>
                {departure ? moment(departure).format("MMM Do YYYY") : ""}
              </div>
              <div className="return">
                <span>Return :</span>
                {revert ? moment(revert).format("MMM Do YYYY") : ""}
              </div>
            </div>
          </div>

          <div className="breakline"></div>
          <div className="right-panel">
            {filteredFlight.length ? (
              filteredFlight.map((e) => <Home item={e} />)
            ) : (
              <div className="msg">SEARCH YOUR FLIGHT </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
