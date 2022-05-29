import React from 'react';
import ProjectsFunction from '../../../functions/Contractor & Consultancy/ProjectsFunction';
import Introslide from './Introslide/Introslide';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Projects = () => {
  const data = ProjectsFunction.fetchAllProject();
  console.log(data);
  return (
    <div>
      <Introslide />
      <br />
      <WhatWeDo />
    </div>
  );
};

export default Projects;
