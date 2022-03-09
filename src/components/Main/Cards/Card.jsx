import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";

const Card = ({ img, cmpTitle, mainTitle, link }) => {
  return (
    <Link
      to={`${link}`}
      className={`card shadow-lg display_card ${classes.Card}`}
      style={{ textDecoration: "none", borderRadius: "50px 50px 0 0" }}
    >
      <div
        className={`text-center d-flex flex-column ${classes.ImageContainer}`}
      >
        <img
          src={img}
          className="card-img-top justify-content-center align-self-center my-auto"
          style={{ maxWidth: "60%", height: "auto" }}
        />
      </div>
      <div className={`${classes.TitleContainer}`}>
        <div className="align-middle text-center p-2 m-0">
          <h5 className="card-title alignmiddle mb-0">{cmpTitle}</h5>
          <p className="m-0">{mainTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
