import React from 'react';
import exterior from "../../../../images/Estimation & Management/ser/exterior.jpg";
import OffersCard from '../../Cards/OffersCard';
var link = '/ContractorConsultancy';
var text = 'Invest with us';
const Offers = () => {
  return <div style={{padding:"15px"}}>
      <OffersCard img={exterior} text={text} link={ link}/>
  </div>;
};

export default Offers;
