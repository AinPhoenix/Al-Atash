import React from 'react';
import ServicesCardRight from '../../Cards/ServicesCardRight';
import ServicesCardLeft from '../../Cards/ServicesCardLeft';
import exterior from "../../../../images/Estimation & Management/ser/exterior.jpg";
var title = "Architect & Interiors";
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.";
var link = "/ContractorConsultancy";
const Services = () => {
  return <div>
   
    <ServicesCardRight img={exterior} title={title} text={text} link={link} />
    <ServicesCardLeft img={exterior} title={title} text={text} link={link} />
    <ServicesCardRight img={exterior} title={title} text={text} link={link} />
    
  </div>;
};

export default Services;
