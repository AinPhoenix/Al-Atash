import React from "react";
import TeamData from "./../../../data/TeamData";
import TeamCard from "../../Main/Cards/TeamCard";
const Teams = () => {
    const AllGroups = TeamData();

    const allCards = AllGroups.map((card) => (
      <TeamCard
        key={card.key}
        img={card.img}
        Name={card.name}
        Designation={card.designation}
        Whatsapp={card.whatsapp}
        Instagram={card.instagram}
        Facebook={card.facebook}
        Twitter={card.twitter}
        Phone={card.Phone}
      />
    ));
    return(
        <section className="" style={{background: "#EFEEEE 0% 0% no-repeat padding-box"}}>
        <div style={{display:"flex",width:"100%",height:"10vh",alignItems:"center",justifyContent:"center",background: "transparent linear-gradient(180deg, #00B4DB 0%, #0083B0 100%) 0% 0% no-repeat padding-box",font: "normal normal normal 60px/80px Poppins",color:"#FFFFFF"}}>
            Team
        </div>
        <div style={{padding:"15px"}}></div>
        <div
        className="d-flex flex-wrap justify-content-evenly"
        style={{ columnGap: "4%", rowGap: "50px" }}
      >
        {allCards}
      </div>
        
        <div style={{padding:"15px"}}></div>
      </section>
    );
    
    
    };
    
    export default Teams;