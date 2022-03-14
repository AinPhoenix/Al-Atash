import React from 'react';
import { useParams } from 'react-router-dom';
import ServicesFunction from '../../functions/Estimation & Management/ServicesFunction';

const EstimationManagementService = () => {
  let { serviceId } = useParams();
  let data = ServicesFunction.fetchService(+serviceId);

  console.log(data);

  return <div>Working {data.name}</div>;
};

export default EstimationManagementService;
