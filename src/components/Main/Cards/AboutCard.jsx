import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AboutCard.module.css';

const AboutCard = ({ img, cmpTitle, mainTitle, link }) => {
  return (
    <Link to="/UnderConstruction" className={`shadow display_card_2 ${classes.AboutCard}`}>
      <div
        className="shadow d-flex"
        style={{
          width: '100%',
          height: '40px',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            width: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={img}
            className="card-img-top justify-content-center align-self-center my-auto"
            style={{ maxWidth: '30%', height: 'auto' }}
          />
        </div>

        <div
          style={{
            width: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h5 className={`card-img-top justify-content-center align-self-center my-auto ${classes.Title}`}>
            {mainTitle}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default AboutCard;
