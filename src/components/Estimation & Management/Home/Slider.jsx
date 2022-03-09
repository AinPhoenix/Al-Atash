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


  
  return (
          <div  className={classes.parent} style={{  }}>
     
     <div className={classes.childh1} style={{}}>
                Our Clients
            </div>

  
       <Swiper slidesPerView="auto" style={{padding:"0 30px 0"}} className={`mySwiper`}>
        <SwiperSlide className={classes.sslider1} style={{}}>{allCards[0]}</SwiperSlide>
        <SwiperSlide className={classes.sslider} style={{}}>{allCards[1]}</SwiperSlide>
        <SwiperSlide className={classes.sslider} style={{}}>{allCards[2]}</SwiperSlide>
        <SwiperSlide className={classes.sslider} style={{}}>{allCards[3]}</SwiperSlide>
        <SwiperSlide className={classes.sslider} style={{}}>{allCards[4]}</SwiperSlide>
        <SwiperSlide className={classes.sslider} style={{}}>{allCards[5]}</SwiperSlide>
        <SwiperSlide className={classes.sslider} style={{}}>{allCards[6]}</SwiperSlide>
        <SwiperSlide className={classes.sslider} style={{}}>{allCards[7]}</SwiperSlide>
        </Swiper>
  
      


      </div>
  
)};

export default Slider;