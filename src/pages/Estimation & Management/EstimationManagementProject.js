import React from 'react';
import { useParams } from 'react-router-dom';

const EstimationManagementProject = () => {
  let { projectId } = useParams();
  return <div><div>Hello world</div>{projectId} EstimationManagementProject</div>;
};

export default EstimationManagementProject;
