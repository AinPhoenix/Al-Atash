import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProjectsCard.module.css';

const ProjectsCard = ({ id, img, cmpTitle, secTitle }) => {
  return (
    <div className={classes.parent} style={{}}>
      <div style={{}}>
        <img className={classes.img} style={{}} alt="" src={img} />
      </div>
      <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>
          {cmpTitle}
        </div>
        <div className={classes.childh2} style={{}}>
          {secTitle}
        </div>
        <div>
          <Link to={`/estimationManagement/projects/${id}`} className={classes.btn}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
