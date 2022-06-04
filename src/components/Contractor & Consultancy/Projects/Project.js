import React from 'react';
import { useParams } from 'react-router-dom';
import RightSideText from './ProjectDetail/RightSideText';

import ProjectsFunction from '../../../functions/Contractor & Consultancy/ProjectsFunction';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';

const Project = () => {
  let { projectId } = useParams();
  const data = ProjectsFunction.fetchProject(+projectId);
  console.log(data);
  return (
    <div>
      <RightSideText client={data.client} yearcompleted={data.yearCompleted} title={data.projectName} img={data.img} />
    </div>
  );
};

export default Project;
