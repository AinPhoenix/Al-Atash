import React from "react";
import ProjectListData from "./../../../data/ProjectListData";

import Card from "./../Cards/Card";

const Projects = () => {
  const AllProjects = ProjectListData();

  const allCards = AllProjects.map((card) => (
    <Card
      key={card.key}
      img={card.img}
      cmpTitle={card.title}
      link={card.Link}
    />
  ));

  return (
    <section className="container">
      <h1 className="display-4 text-center my-5">Our Projects</h1>
      <div
        class="d-flex flex-wrap justify-content-evenly"
        style={{ columnGap: "5%", rowGap: "20px" }}
      >
        {allCards}
      </div>
    </section>
  );
};

export default Projects;
