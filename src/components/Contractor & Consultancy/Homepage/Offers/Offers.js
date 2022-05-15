import React from 'react';
import exterior from "../../../../images/Estimation & Management/ser/exterior.jpg";
import OffersCard from '../../Cards/OffersCard';
import classes from './Offers.module.css';
var link = './Packages';
var text = 'Packages';

var link1 = './Invest';
var text1 = 'Invest With Us';

var link2 = './Brochures';
var text2 = 'Brochures';

const Offers = () => {
  return <div className={classes.parent} style={{}}>
    <OffersCard img={exterior} text={text} link={link} /> 
    <OffersCard img={exterior} text={text1} link={ link1}/> 
    <OffersCard img={exterior} text={text2} link={ link2}/> 
    
  </div>;
};

export default Offers;
