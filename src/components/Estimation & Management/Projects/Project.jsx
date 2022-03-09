import React from "react";
import ProjectsData from '../../../data/ProjectsData';
import ProjectsCard from '../Card/ProjectsCard';
import classes from "../Home/Projects.module.css";

const Projects = () => {
    const AllGroups = ProjectsData();

  const allCards = AllGroups.map((card) => (
    <ProjectsCard key={card.key} secTitle={card.secondtitle} img={card.img} cmpTitle={card.title} Link={card.Link}/>
  ));

    return(
        <section className={classes.parent} style={{}}>
        <div style={{display:"flex",width:"100%",height:"10vh",alignItems:"center",justifyContent:"center",background: "transparent linear-gradient(180deg, #00B4DB 0%, #0083B0 100%) 0% 0% no-repeat padding-box",font: "normal normal normal 60px/80px Poppins",color:"#FFFFFF"}}>
            Projects
        </div>
        <div style={{padding:"15px"}}></div>
        <div
          className={`${classes.childcard} d-flex flex-wrap justify-content-center`}
          style={{}}
        >
          {allCards}
        </div>
        <div style={{padding:"15px"}}></div>
      </section>
    );
    
    
    };
    
    export default Projects;