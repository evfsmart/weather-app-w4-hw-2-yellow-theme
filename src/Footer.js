import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a
        href="https://www.shecodes.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Emma Smart
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/evfsmart/weather-app-yellow-theme"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://unruffled-leavitt-fb81d4.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Netlify
      </a>
      . Weather icons by{" "}
      <a
        href="https://www.flaticon.com/authors/dinosoftlabs"
        title="DinosoftLabs"
        target="_blank"
        rel="noopener noreferrer"
      >
        DinosoftLabs
      </a>
    </div>
  );
}
