import React from 'react';
import { useParams } from 'react-router-dom';

import ProjectsFunction from '../../../functions/Contractor & Consultancy/ProjectsFunction';

const Project = () => {
  let { projectId } = useParams();
  const data = ProjectsFunction.fetchProject(+projectId);
  console.log(data);
  return <div>Project</div>;
};

export default Project;
