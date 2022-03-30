import React from 'react';
import GlobalStyles from './slider/GlobalStyles';
import ImageSlider from './slider/ImageSlider';
import styled from 'styled-components';
import classes from './UpperSection.module.css';

const UpperSection = ({ title, price, pictures }) => {
  return (
    <div className={classes.section}>
      <div className={classes.leftSection}>
        <div className={classes.card}>
          <div className={classes.icons}>
            <i class="fas fa-house-damage"></i>
          </div>
          <div className={classes.title}>Residential Projects</div>
        </div>
        <div className={classes.card}>
          <div className={classes.icons}>
            <i class="fas fa-building"></i>
          </div>
          <div className={classes.title}>Commercial Projects</div>
        </div>
        <div className={classes.card}>
          <div className={classes.icons}>
            <i class="fas fa-hammer"></i>
          </div>
          <div className={classes.title}>Infrastructure Projects</div>
        </div>
        <div className={classes.card}>
          <div className={classes.icons}>
            <i class="fas fa-road"></i>
          </div>
          <div className={classes.title}>Road + Bridge Projects</div>
        </div>
        <div className={classes.card}>
          <div className={classes.icons}>
            <i class="fas fa-mountain"></i>
          </div>
          <div className={classes.title}>Landscape Projects</div>
        </div>
        <div className={classes.card}>
          <div className={classes.icons}>
            <i class="fas fa-landmark"></i>
          </div>
          <div className={classes.title}>Hvac</div>
        </div>
      </div>

      {/* Slider Comes Here */}
      <div className={classes.rightSection}>
        <div className={classes.slider}>
          <GlobalStyles />

          <div>
            <ImageSlider
              style={{ objectFit: 'contain', height: '400px', width: '100%' }}
              images={pictures}
            ></ImageSlider>
          </div>
        </div>
        <div className={classes.pageData}>
          <h1>{title}</h1>
          <div>Labour + Material</div>
          <div>PKR {price}/-</div>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
