import React from 'react';
import GlobalStyles from './slider/GlobalStyles';
import ImageSlider from './slider/ImageSlider';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ServicesFunction from '../../functions/Estimation & Management/ServicesFunction';
import pic from '../../images/Estimation & Management/Services/01-Turnkey Sheet/01.02-Before Construction (Trunkey Sheet).jpg';
const EstimationManagementService = () => {
  let { serviceId } = useParams();
  let data = ServicesFunction.fetchService(+serviceId);

  console.log(data);

  const priceComp = () => {
    if (data.price != 0) {
      return <div>PKR. {data.price}/-</div>;
    } else {
      return;
    }
  };

  return (
    <div>
      <GlobalStyles />

      <div>
        <ImageSlider style={{ height: '65Vh' }} images={data.pictures}></ImageSlider>
      </div>

      <div style={{ padding: '0 10vh' }}>
        <div style={{ fontSize: '60px' }}>{data.name}</div>
        <div style={{ fontSize: '40px' }}>Labour + Material</div>
        {priceComp()}
      </div>
    </div>
  );
};

export default EstimationManagementService;
