import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsFunction from '../../functions/Estimation & Management/ProjectsFunction';

const EstimationManagementProject = () => {
  let { projectId } = useParams();

  const data = ProjectsFunction.fetchProject(+projectId);
  console.log(data);

  return (
    <div>
      {' '}
      {data.id} = {data.projectName}
    </div>
  );
};

export default EstimationManagementProject;
