import React from 'react';
import ServicesCardRight from '../../Cards/ServicesCardRight';
import ServicesCardLeft from '../../Cards/ServicesCardLeft';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';
import architect from '../../../../images/Contractor & Consultancy/architect.png';
import constructioncontractor from '../../../../images/Contractor & Consultancy/constructioncontractors.png';
import investmentadviser from '../../../../images/Contractor & Consultancy/investmentadviser.png';

var title1 = 'Architect & Interiors';
var text1 =
  'We provide Mordren Architectural Designs, Beatuful Interior Designs, Solid Structrual Design and Computerized Drawings under one roof for your project. ';
var link1 = './Projects';

var title2 = 'Construction Contractors';
var text2 =
  'We are well recongnised Contractor to deliver your project with high quality ontime and under your budget. Our clients know we deliver high quality.';
var link2 = './Services';

var title3 = 'Investment Adviser';
var text3 =
  'We give secure and guaranteed profitable envoirment in the construction field. We can advise and calculate the cost to complete the entire project.';
var link3 = './Invest';
const Services = () => {
  return (
    <div>
      <ServicesCardRight img={architect} title={title1} text={text1} link={link1} />
      <ServicesCardLeft img={constructioncontractor} title={title2} text={text2} link={link2} />
      <ServicesCardRight img={investmentadviser} title={title3} text={text3} link={link3} />
    </div>
  );
};

export default Services;
