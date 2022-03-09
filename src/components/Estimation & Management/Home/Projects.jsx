import React from 'react';
import ProjectsData from '../../../data/ProjectsData';
import ProjectsCard from '../Card/ProjectsCard';
import classes from "./Projects.module.css";

const Projects = () => {
  const AllGroups = ProjectsData();

  const allCards = AllGroups.map((card) => (
    <ProjectsCard key={card.key} secTitle={card.secondtitle} img={card.img} cmpTitle={card.title} Link={card.Link}/>
  ));

  return <section className={classes.parent} style={{}}>
      <h1 className={classes.childh1} style={{}}>Our Projects</h1>
      <div
        className={`${classes.childcard} d-flex flex-wrap justify-content-center`}
        style={{}}
      >
        {allCards}
      </div>
      <div style={{padding:"15px"}}></div>
    </section>
};

export default Projects;
