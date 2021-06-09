import React from "react";
import "./CityAndDetails.css";
import FormatDate from "./FormatDate";

export default function CityAndDetails(props) {
  return (
    <div className="CityAndDetails">
      <div className="row">
        <div className="col-6 city-and-details">
          <h1>
            {props.details.name}, {props.details.country}
          </h1>
          <ul>
            <li>
              Last updated: <FormatDate timestamp={props.details.timestamp} />
            </li>
            <li>Description: {props.details.description}</li>
          </ul>
        </div>
        <div className="col-6 big-image-and-temperature">
          <div className="temperature-container d-flex justify-content-end">
            <img
              src={props.details.iconSrc}
              alt="weather"
              className="temperature-img"
            />
            <div>
              <span className="temperature">{props.details.temperature}</span>
              <span className="unit">
                <a href="/" className="active">
                  °C{" "}
                </a>
                <span className="pipe">| </span>
                <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="humidity-and-wind">
            Humidity:{" "}
            <strong>
              <span>{props.details.humidity}</span>%
            </strong>
            , Wind:{" "}
            <strong>
              <span>{props.details.wind}</span> m/s
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
