import React from "react";
import classes from "./SliderCard.module.css"


const SliderCard = ({img}) => {
  return (
   
       <section style={{}}>
          
            <div className={classes.imgbox} style={{}}>
             <img className={classes.img} style={{}} alt="" src={img} />
             </div>
         </section> 
      
  );
};

export default SliderCard;
