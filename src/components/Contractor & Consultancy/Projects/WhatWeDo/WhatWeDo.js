import React from 'react';
import ProjectsData from '../../../../data/Contractor & Consultancy/ProjectsData';
import OffersCardproject from '../../Cards/OffersCardproject';

import Project from './../../../../functions/Contractor & Consultancy/ProjectsFunction';

const WhatWeDo = () => {
  const AllGroups = Project.fetchAllProject();
  const allCards = AllGroups.map((card) => (
    <OffersCardproject key={card.key} id={card.key} img={card.img} text="View More" />
  ));

  return (
    <div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          rowGap: '2vh',
          width: '90%',
          columnGap: '10%',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {allCards}
      </div>
      <br />
    </div>
  );
};

export default WhatWeDo;
