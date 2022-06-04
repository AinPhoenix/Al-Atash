import React from 'react';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';
import BrochureCard from '../Cards/Brochures/BrochureCard';
import BrochuresData from '../../../data/Contractor & Consultancy/BrochuresData';
import classes from './Brochures.module.css';
function Brochures() {
  const AllGroups = BrochuresData();
  const allCards = AllGroups.map((card) => <BrochureCard img={card.img} title={card.text} />);

  return (
    <div>
      {' '}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`,
        }}
        className={classes.brochures}
      >
        Brochures
      </div>
      <div className={classes.cardassemble} style={{}}>
        {allCards}
      </div>
    </div>
  );
}

export default Brochures;
