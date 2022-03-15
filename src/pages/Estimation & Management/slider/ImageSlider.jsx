import React,{useEffect, useState} from "react";
import styled from "styled-components"

const IndicatorWrapper = styled.div`
display:flex;
flex-wrap:nowrap;
flex-direction:row;
position:absolute;
bottom:3%;

right:15px;`;


const Dot = styled.div`
width:12px;
border:1px solid black;
height:12px;
border-radius:8px;
background-color:${(props)=>(props.isActive?'black':'white')};
opacity:${(props)=>(props.isActive?1:0.5)};
margin:5px; 
transition:750ms all ease-in-out;

`;

const Indicator = ({currentSlide,amountSlides,nextSlide}) =>{
return(
    <IndicatorWrapper>

    {Array(amountSlides).fill(1).map((_, i) =>(<Dot key={i} isActive={currentSlide ===i} onClick={() => nextSlide(i)}/>))}
    </IndicatorWrapper>
);
};

const Wrapper = styled.div`
    border:5px solid transparent;
    display: flex;
    flex-wrap:nowrap;
    position: relative;
    height: 80vh;
    overflow-x:hidden; 
    overflow-y:hidden;
    flex-direction:row;
`;

const Gradient = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);`;



const Slide = styled.div`
height: 100%;
width: 100%;
flex-shrink:0;


background-size:contain;
background-repeat: no-repeat;  
transition:750ms all ease-in-out;

`;

const ChildrenWrapper = styled.div`
position:absolute;
top:45%;
left: 5%;
`;

const ImageSlider = ({images =[],autoPlay = true, autoPlayTime = 3000, children = [],...props}) =>{
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide(slideIndex = currentSlide+1){
        const newSlideIndex = slideIndex > images.length - 1 ? 0 : slideIndex;
        setCurrentSlide(newSlideIndex);
    }

    useEffect(() => {
        const timer = setTimeout(() =>{
           nextSlide();
        },autoPlayTime);

        return()=>clearTimeout(timer)
    }, [currentSlide]);
    
    return(<Wrapper {...props}>
        {images.map((imageUrl,index)  =>
            (<Slide key={index} style={{
            marginLeft: index ===0?`-${currentSlide * 100}%`:undefined,
            }}><img style={{width:"100%"}} src={imageUrl}/></Slide>))}
            {/* <Gradient/> */}
            <Indicator currentSlide={currentSlide} amountSlides={images.length} nextSlide={nextSlide}/>
            <ChildrenWrapper>{children}</ChildrenWrapper>
            

         
    </Wrapper>);
}

export default ImageSlider;