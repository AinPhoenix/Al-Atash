import React from 'react';
import ProjectsData from '../../../data/ProjectsData';
import ProjectsCard from '../Card/ProjectsCard';
import TitleComponent from '../Extras/Title Component/TitleComponent';
import classes from '../Home/Projects.module.css';

const Projects = () => {
  const AllGroups = ProjectsData();

  const allCards = AllGroups.map((card) => (
    <ProjectsCard key={card.key} secTitle={card.secondtitle} img={card.img} cmpTitle={card.title} Link={card.Link} />
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
