import React from 'react';
import ServicesData from '../../../data/ServicesData';
import ServicesCard from '../Card/ServicesCard';
import classes from "./Services.module.css";

const Services = () => {
  const AllGroups = ServicesData();

  const allCards = AllGroups.map((card) => (
    <ServicesCard key={card.key} img={card.img} cmpTitle={card.title} Link={card.Link}/>
  ));

  return <section className={classes.parent} style={{}}>
      <h1 className={classes.childh1} style={{}}>Our Services</h1>
      <div
        className={`${classes.childcard} d-flex flex-wrap justify-content-center`}
        style={{}}
      >
        {allCards}
      </div>
      <div style={{padding:"15px"}}></div>
    </section>
};

export default Services;
// { img, cmpTitle,  link }
// key={card.key} img={card.img} mainTitle={card.secondTitle} link={card.link} 