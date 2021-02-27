import React from "react";
import "./Home.css";
const Home = (props) => {
  return (
    <div className="home">
      <h1>Rs.{props.item.price}</h1>
      <div className="details">
        <div className="city_name">
          {props.item.flightNumber}
          <br />
          {props.item.originCity}
          {" > "}
          {props.item.destCity}
          <div className="break"></div>
          {props.item.originCityCode}
          {" > "}
          {props.item.destCityCode}
        </div>
        <div className="timing">
          Depart: <h3>{props.item.DepartTime}</h3>
          Arrive:<h3>{props.item.ArriveTime}</h3>
        </div>
        <div>
          <img className="image" src={props.item.img} alt="flight" />
          <div className="booking_button">Book this flight</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
