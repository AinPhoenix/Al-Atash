import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsFunction from '../../functions/Estimation & Management/ProjectsFunction';


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

  return (
    <div>
      <div style={{height:"70vh",width:"100%"}}>
          <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={data.pictures}/>
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
  );
};

export default EstimationManagementProject;
