import React from 'react';
import Services from './Tagline/Services';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';
import LeftSideTextBtn from '../../Contractor & Consultancy/Cards/LeftSideTextBtn';
import RightSideTextBtn from '../../Contractor & Consultancy/Cards/RightSideTextBtn';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import { getByTitle } from '@testing-library/react';

const Text =
  'Al Atash has an accomplished, exceptionally qualified, and dynamic group of Interior Designers, Architects, Technicians, and Project Managers gaining practical experience in numerous parts of plan. The Combined abilities of the group and their broad public level organization of expert and exceptionally gifted specialists, craftsmans, development specialists, and makers of custom administrations permit them to offer the quintessential plan insight for their clients.';
const Title = 'Architectural & Interior Desiging';
const link = '';

const Text1 =
  'We are known for our very much perceived capacity to convey projects with excellent quality on time. We carry our mastery to a wide scope of areas, including business office, private, modern, Renovation, and up-degree under the oversight of exceptionally gifted specialists, bosses, and thoroughly prepared laborers.';
const Title1 = 'Construction Services';
const link1 = '';

const ContractorConsultancyServicepage = () => {
  return (
    <div>
      <Services />
      <LeftSideTextBtn img={exterior} title={Title} text={Text} link={link} />
      <RightSideTextBtn img={exterior} title={Title1} text={Text1} link={link1} />
      <WhatWeDo />
    </div>
  );
};

export default ContractorConsultancyServicepage;
