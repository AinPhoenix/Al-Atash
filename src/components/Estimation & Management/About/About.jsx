import React from 'react';
import Construction from "../../../images/Estimation & Management/About.jpg";
import classes from "./About.module.css";

const About = () => {
  return <div className={classes.parent} style={{}}>
            <div className={classes.img} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${Construction})`}}>
                <div className={classes.child} style={{}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ea deserunt dolorum corporis quas minima vel, fugiat qui eligendi similique inventore numquam tenetur dicta dolor nostrum quae, reprehenderit, harum doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nobis quis. Quas sapiente velit nulla magnam, repellendus voluptatum dolorum quibusdam, ipsum culpa non est eaque necessitatibus, id quia dolorem! Quae.</div>
            </div>
    </div>;
};

export default About;
