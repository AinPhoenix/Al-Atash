import React from 'react';
import exterior from "../../../../images/Estimation & Management/ser/exterior.jpg";

const Offers = () => {
  return <div>
      <div style={{display:"flex",flexDirection:"column",width:"280px",height:"300px",}}>
        <div style={{position:"relative", width: "280px", height: "270px",borderRadius: "7px", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
    
        <a href="/ContractorConsultancy" style={{left:"30px",marginTop:"250px",width:"220px",padding:"13px 0",position:"absolute" ,textAlign:"center",fontSize:"auto",color:"#FFFFFF",textDecoration:"none",boxShadow: "0px 3px 6px #00000040",borderRadius: "15px",background:"linear-gradient(to bottom right, #FBCD38,#FCBB5B)"}}>Packages</a>
    
    </div>
  </div>;
};

export default Offers;
