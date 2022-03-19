import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsFunction from '../../functions/Estimation & Management/ProjectsFunction';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "../../components/Estimation & Management/Home/style.css";

const EstimationManagementProject = () => {
  let { projectId } = useParams();

  const data = ProjectsFunction.fetchProject(+projectId);
  console.log(data);
  
  const priceComp = () => {
    if (data.price != 0) {
      return <div style={{padding:"10px 0 0 0",display:"flex"}}>
      <div style={{padding:"5px 40px",color:"#FFFFFF",background: "#00B4DB 0% 0% no-repeat padding-box",fontSize:"3vh",borderRadius: "7px",boxShadow: "0px 3px 6px #0000005C"}}>
      PKR {data.price}/-
     </div>
     </div>;
    } else {
      return;
    }
  };

const automateslider = () => {
  var returnArr=[];
  for (let i = 0; i < data.pictures.length; i++) {
    if(i==0){
   returnArr.push(<SwiperSlide  style={{width:"400px",height:"500px"}}>  <img  style={{width:"400px",height:"auto"}} src={data.pictures[i]}/>     </SwiperSlide>);
    }
    else{
      returnArr.push(<SwiperSlide  style={{width:"400px",height:"500px"}}>  <img  style={{width:"400px",height:"auto"}} src={data.pictures[i]}/>    </SwiperSlide>);
    }
  }
  return returnArr;
}

  return (
    <div>
      <div>
      <div style={{height:"70vh",width:"100%"}}>
          <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={data.pictures[0]}/>
      </div>
      <div style={{display:"flex",height:"30vh",justifyContent:"space-evenly",flexDirection:"column",padding:"5vh 9vh"}}>
        <div style={{fontSize:"5vh"}}>
          {data.projectName}
        </div>
        <div style={{fontSize:"3vh"}}>
          {data.work}
        </div>
        <div>
       {priceComp()}
       </div>
      </div>
      </div>

      {/* SLider */}
      <div style={{padding:"6vh"}}>
      <Swiper slidesPerView="auto" style={{padding:"0 30px 0"}} className={`mySwiper`}>
       
       {automateslider()}
       </Swiper>
      </div>
<div style={{padding:"3vh"}}></div>
      {/* box */}
      <div style={{display:"flex",padding:"10vh  15vh",flexDirection:"column",justifyContent:"space-between",color:"#FFFFFF",width:"100%",height:"50vh",background: "#191D19 0% 0% no-repeat padding-box"}}>
          
      
      </div>
    </div>
  );
};

export default EstimationManagementProject;
