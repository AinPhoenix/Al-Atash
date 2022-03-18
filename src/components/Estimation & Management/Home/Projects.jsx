import React from 'react';

import ProjectsFunction from '../../../functions/Estimation & Management/ProjectsFunction';
import ProjectsCard from '../Card/ProjectsCard';
import classes from './Projects.module.css';

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
      <h1 className={classes.childh1} style={{}}>
        Our Projects
      </h1>
      <div className={`${classes.childcard} d-flex flex-wrap justify-content-center`} style={{}}>
        {allCards}
      </div>
      <div style={{ padding: '15px' }}></div>
    </section>
  );
};

export default Projects;
