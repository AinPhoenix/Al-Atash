import React from 'react';
import ProjectsFunction from '../../../functions/Contractor & Consultancy/ProjectsFunction';

const Projects = () => {
  const data = ProjectsFunction.fetchAllProject();
  console.log(data);
  return <div>Projects</div>;
};

export default Projects;
