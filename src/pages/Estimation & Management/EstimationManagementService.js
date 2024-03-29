import React from 'react';
import { useParams } from 'react-router-dom';
import ServicesFunction from '../../functions/Estimation & Management/ServicesFunction';
import UpperSection from '../../components/Estimation & Management/Service/UpperSection';
import LowerSection from '../../components/Estimation & Management/Service/LowerSection';

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
      {/* <GlobalStyles />

      <div>
        <ImageSlider style={{ height: '65Vh' }} images={data.pictures}></ImageSlider>
      </div>

      <div style={{ padding: '0 10vh' }}>
        <div style={{ fontSize: '60px' }}>{data.name}</div>
        <div style={{ fontSize: '40px' }}>Labour + Material</div>
        {priceComp()}
      </div> */}

      <UpperSection title={data.name} price={data.price} pictures={data.pictures} />
      <LowerSection />
    </div>
  );
};

export default EstimationManagementService;
