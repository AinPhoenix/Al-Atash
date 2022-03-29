import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ProjectUnderSection.module.css';

const ProjectUnderSection = ({ id }) => {
  return (
    <div style={{ width: '60vh', height: '10vh', border: '2px solid red' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ padding: '0.5vh', width: '9vh', alignItem: 'center' }}>
          <i
            style={{
              borderRadius: '18px',

              padding: '15px',
              border: '5px solid white',
              color: 'white',
            }}
            class="fa fa-list"
            aria-hidden="true"
          ></i>
        </div>
        <div style={{ color: 'white', padding: '0 20px 0' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>Project Name</div>
          <div style={{ fontSize: '19px' }}>Grey Structure</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUnderSection;
