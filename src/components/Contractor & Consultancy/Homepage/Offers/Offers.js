import React from 'react';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';
import investwithus from '../../../../images/Contractor & Consultancy/pngs/18.png';
import packages from '../../../../images/Contractor & Consultancy/pngs/17.png';
import bronchures from '../../../../images/Contractor & Consultancy/pngs/20.png';

import OffersCard from '../../Cards/OffersCard';
import classes from './Offers.module.css';
var link = './Packages';
var text = 'Packages';

var link1 = './Invest';
var text1 = 'Invest With Us';

var link2 = './Brochures';
var text2 = 'Brochures';

const Offers = () => {
  return (
    <div className={classes.parent} style={{}}>
      <OffersCard img={packages} text={text} link={link} />
      <OffersCard img={investwithus} text={text1} link={link1} />
      <OffersCard img={bronchures} text={text2} link={link2} />
    </div>
  );
};

export default Offers;
