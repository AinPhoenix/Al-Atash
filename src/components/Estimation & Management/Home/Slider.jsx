import ClientsData from "../../../data/ClientsData";
import SliderCard from "../Card/SliderCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "./style.css";
import classes from "./Slider.module.css";


const Slider = () => {
  const AllGroups = ClientsData();
 
  const allCards = AllGroups.map((card) => {
      return( <SliderCard 
      img={card.img}
      />);
  });
const automateslider = () => {
  var returnArr=[];
  for (let i = 0; i < allCards.length; i++) {
    if(i==0){
   returnArr.push(<SwiperSlide className={classes.sslider1} style={{}}>  {allCards[i]}     </SwiperSlide>);
    }
    else{
      returnArr.push(<SwiperSlide className={classes.sslider} style={{}}>  {allCards[i]}     </SwiperSlide>);
    }
  }
  return returnArr;
}
  return (
          <div  className={classes.parent} style={{  }}>
     
     <div className={classes.childh1} style={{}}>
                Our Clients
            </div>

  
       <Swiper slidesPerView="auto" style={{padding:"0 30px 0"}} className={`mySwiper`}>
       
        {automateslider()}
        </Swiper>
  
  


      </div>
  
)};

export default Slider;