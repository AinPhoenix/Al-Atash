import React from 'react';
import ServicesData from '../../../../data/Contractor & Consultancy/ServicesData';
import OffersCard from '../../Cards/OffersCard';
const WhatWeDo = () => {
    const AllGroups = ServicesData();
    const allCards = AllGroups.map((card) => (
        <OffersCard
          key={card.id}
          img={card.img}
            link={card.link}
            text="View More"
        />
    ));
    
  return <div><div style={{width:"100%",padding:"3vh 0",fontWeight:"bold",textAlign:"center",fontSize:"6.5vh"}}> 
      WHAT WE DO

  </div>
      <div style={{ marginLeft:"auto",marginRight:"auto",display: "flex",rowGap:"2vh",width:"90%",columnGap:"10%",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {allCards}
      </div>
      <br/>
      </div>;
};

export default WhatWeDo;
