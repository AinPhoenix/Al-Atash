import React from 'react';
import ProjectsData from '../../../data/ProjectsData';
import ProjectsFunction from '../../../functions/Estimation & Management/ProjectsFunction';
import ProjectsCard from '../Card/ProjectsCard';
import TitleComponent from '../Extras/Title Component/TitleComponent';
import classes from '../Home/Projects.module.css';

const Projects = () => {
  const data = ProjectsFunction.fetchAllProjects();

  const allCards = data.map((card) => (
    <ProjectsCard
      key={card.id}
      id={card.id}
      img={card.pictures[0]}
      cmpTitle={card.projectName}
      secTitle={card.workTitle}
    />
  ));

  return (
    <section className={classes.parent} style={{}}>
      <TitleComponent title="Projects" />

      <div style={{ padding: '15px' }}></div>
      <div className={`${classes.childcard} d-flex flex-wrap justify-content-center`} style={{}}>
        {allCards}
      </div>
      <div style={{ padding: '15px' }}></div>
    </section>
  );
};

export default Projects;
