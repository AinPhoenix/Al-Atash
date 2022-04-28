import React from 'react';
import exterior from "../../../../images/Estimation & Management/ser/exterior.jpg";

const Introslide = () => {
  return <div style={{ width: '100%' }}>
    <div style={{
      backgroundPosition: "center",alignItems:"center",backgroundRepeat: "no-repeat",backgroundSize: "cover",position: "relative", display: 'flex', width: '100%', height: '70vh', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`
    }}>
      <div style={{color:" #FFFFFF",width:"40%",textAlign:"justify",marginLeft:"10%"}}>
        <h1 style={{ fontSize: "30px",paddingBottom:"1vh"}}>Al Atash Contractor & Consultancy</h1>
        <p style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.</p>
      </div>
    </div>
  </div>;
};

export default Introslide;
