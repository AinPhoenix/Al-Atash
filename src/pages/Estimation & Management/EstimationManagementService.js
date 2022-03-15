import React from "react";
import GlobalStyles from "./slider/GlobalStyles";
import ImageSlider from "./slider/ImageSlider";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import ServicesFunction from '../../functions/Estimation & Management/ServicesFunction';
import pic from "../../images/Estimation & Management/Services/01-Turnkey Sheet/01.02-Before Construction (Trunkey Sheet).jpg";
const EstimationManagementService = () => {
  let { serviceId } = useParams();
  let data = ServicesFunction.fetchService(+serviceId);

  console.log(data);

  return(
    <div>
      
        <GlobalStyles />
        
        <div>
        <ImageSlider style={{height: "75vh"}}  images={data.pictures}>
                
        </ImageSlider></div>
        
    </div>
);
  
};

export default EstimationManagementService;
