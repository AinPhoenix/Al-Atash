import React from 'react';
import { useParams } from 'react-router-dom';
import ServicesFunction from '../../../../functions/Contractor & Consultancy/ServicesFunction';

const Service = () => {
  let { serviceId } = useParams();
  const data = ServicesFunction.fetchService(+serviceId);
  console.log(data);
  return <div>Service</div>;
};

export default Service;
