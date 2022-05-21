import React from 'react';
import Services from './Tagline/Services';
import exterior from "../../../images/Estimation & Management/ser/exterior.jpg";
import LeftSideTextBtn from '../../Contractor & Consultancy/Cards/LeftSideTextBtn';
import RightSideTextBtn from '../../Contractor & Consultancy/Cards/RightSideTextBtn';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import { getByTitle } from '@testing-library/react';
const Text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.';
const Title = 'Lorem ipsum';
const link = '';

const Text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.';
const Title1 = 'Lorem ipsum';
const link1 = '';

const ContractorConsultancyServicepage = () => {
  return <div> 
      <Services />
      <LeftSideTextBtn img={exterior} title={Title} text={Text} link={link} />
      <RightSideTextBtn img={exterior} title={Title1} text={Text1} link={link1} />
      <WhatWeDo />
  </div>;
};

export default ContractorConsultancyServicepage;
