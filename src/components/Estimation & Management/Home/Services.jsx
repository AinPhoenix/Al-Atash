import React from 'react';
import ServicesFunction from '../../../functions/Estimation & Management/ServicesFunction';
// import ServicesData from '../../../data/ServicesData';
import ServicesCard from '../Card/ServicesCard';
import classes from './Services.module.css';

const Services = () => {
  // const AllGroups = ServicesData();

  let data = ServicesFunction.fetchAllService();

  const allCards = data.map((card) => (
    <ServicesCard key={card.key} id={card.key} img={card.pictures[0]} cmpTitle={card.name} />
  ));

  return (
    <section className={classes.parent} style={{}}>
      <h1 className={classes.childh1} style={{}}>
        Our Services
      </h1>
      <div className={`${classes.childcard} d-flex flex-wrap justify-content-center`} style={{}}>
        {allCards}
      </div>
      <div style={{ padding: '15px' }}></div>
    </section>
  );
};

export default Services;
// { img, cmpTitle,  link }
// key={card.key} img={card.img} mainTitle={card.secondTitle} link={card.link}
