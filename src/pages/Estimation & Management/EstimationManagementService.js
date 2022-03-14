import React from 'react';
import { useParams } from 'react-router-dom';
import ServicesFunction from '../../functions/Estimation & Management/ServicesFunction';

const EstimationManagementService = () => {
  let { serviceId } = useParams();

  const data = ServicesFunction.fetchService(+serviceId);

  return <div>{data.name} working</div>;
};

export default EstimationManagementService;
