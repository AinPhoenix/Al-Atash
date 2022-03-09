import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "./../images/Main/Company Logo.png";

const UnderConstruction = () => {
  return (
    <div class="container">
      <div
        class="row align-items-center"
        style={{ height: "100vh", minHeight: "100vh" }}
      >
        <img src={MainLogo} style={{ width: "40%" }} />
        <div class="col text-center">
          <div class="content">
            <h1>This field is under constuction</h1>
            <Link
              class="btn mt-4"
              to="/"
              style={{ color: "#32A9D4", border: "1px solid #32A9D4" }}
            >
              Visit Al-Atash Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
