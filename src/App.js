import React from "react";
import "./App.css";
import Header from "./Header";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <WeatherSearch />
      <hr />
      <p>Forecast</p>
      <hr />
      <Footer />
    </div>
  );
}
