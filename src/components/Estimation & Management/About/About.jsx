import React from 'react';
import Construction from '../../../images/Estimation & Management/About.jpg';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.parent}>
      <div
        className={classes.img}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${Construction})`,
        }}
      >
        <div className={classes.child}>
          Al Atash Building Estimation is a specialized company that provides complete financial consultancy and
          analysis for the construction, design, landscaping, architecture, and all other parameters involved in the
          formation of residential and commercial buildings, societies, plazas, and more. With the experience of more
          than 10 years, we have been working tremendously on the efficient provision of financial analysis to clients
          before they even start their construction procedure. For this purpose, we have hired professional management
          and expert staff.
        </div>
      </div>
    </div>
  );
};

export default About;
