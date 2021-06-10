import React, { useState } from "react";
import "./WeatherSearch.css";
import axios from "axios";
import CityAndDetails from "./CityAndDetails";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconSrc: `/img/${response.data.weather[0].icon}.png`,
      timestamp: response.data.dt * 1000,
      coordsLat: response.data.coord.lat,
      coordsLon: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let ApiId = "17a639a638a4bfe25417abb69ec4868d&units=metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiId}`;
    if (city.length === 0) {
      return alert("Please enter a city");
    }
    return axios
      .get(url)
      .then(displayWeather)
      .catch(function (error) {
        if (error.response.status === 404) {
          alert("Not a city");
        }
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function cityAndDetails() {
    return <CityAndDetails details={weather} />;
  }

  let form = (
    <form className="mb-3 mt-t" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control search-input"
            autoComplete="off"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            className="btn btn-primary w-100"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div className="WeatherSearch">
        {form}
        <hr />
        {cityAndDetails()}
      </div>
    );
  } else {
    return <div className="WeatherSearch">{form}</div>;
  }
}
