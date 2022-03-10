import React from 'react';
import { useParams } from 'react-router-dom';

const EstimationManagementService = () => {
  let { serviceId } = useParams();
  return <div>{serviceId} working</div>;
};

export default EstimationManagementService;
