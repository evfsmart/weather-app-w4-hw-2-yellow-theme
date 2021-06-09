import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">
        <img
          src="img/cloudandsun.svg"
          className="headerImg"
          alt="sun and cloud"
        />
      </a>
      <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
        <img src="img/snowflake.svg" className="headerImg" alt="snowflake" />
      </a>
      <img src="img/sun.svg" className="headerImg" alt="sun" />
      <img src="img/lightning.svg" className="headerImg" alt="lightning" />
      <img src="img/raincloud.svg" className="headerImg" alt="hraincloud" />
      <img
        src="img/cloudsandsun.svg"
        className="headerImg"
        alt="sun and clouds"
      />
      <img src="img/windcloud.svg" className="headerImg" alt="wind" />
    </div>
  );
}
