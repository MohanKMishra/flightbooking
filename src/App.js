import React, { useState } from "react";
import moment from "moment";
// import "./App.css";
import "./Test.css";
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
    twoWay: false,
  });
  console.log(formData.origin);
  const { revert, departure } = formData;

  const [filteredFlight, setFilteredFlight] = useState([]);
  const [returnFilteredFlight, setReturnFilteredFlight] = useState([]);

  const handleFormSubmit = () => {
    setFilteredFlight(
      data.filter(
        (e) =>
          formData.origin.toLowerCase() === e.originCity.toLowerCase() &&
          formData.destination.toLowerCase() === e.destCity.toLowerCase()
      )
    );
  };

  /*update*/
  const manageFormSubmit = () => {
    setReturnFilteredFlight(
      data.filter(
        (e) =>
          formData.destination.toLocaleLowerCase() ===
            e.originCity.toLocaleLowerCase() &&
          formData.origin.toLocaleLowerCase() === e.destCity.toLocaleLowerCase()
      )
    );
  };

  return (
    <div className="App">
      <div className="navbar">Flight Search Engine</div>
      <div className="container">
        <Sidepannel
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          manageFormSubmit={manageFormSubmit}
        />
        <div className="handleBody">
          <div className="header container">
            <div className="travel-info">
              {formData.origin.toUpperCase()}
              {" > "}
              {formData.destination.toUpperCase()}
              {formData.twoWay && " > " + formData.origin.toUpperCase()}
            </div>
            <div className="datedesign">
              <div className="depart">
                <span>Depart :</span>
                {departure ? moment(departure).format("MMM Do YYYY") : ""}
              </div>
              {formData.twoWay && (
                <div className="return">
                  <span>Return :</span>
                  {revert ? moment(revert).format("MMM Do YYYY") : ""}
                </div>
              )}
            </div>
          </div>

          <div className="breakline"></div>
          <div className="rightpanel">
            {filteredFlight.length ? (
              filteredFlight.map((e) => <Home item={e} />)
            ) : (
              <div className="msg">SEARCH YOUR FLIGHT </div>
            )}
            {formData.twoWay &&
              returnFilteredFlight.length &&
              returnFilteredFlight.map((e) => <Home item={e} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
