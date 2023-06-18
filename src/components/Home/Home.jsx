import React ,{useEffect}from "react";
import About from "./About";
import Contant from "./Contant";
import Scores from "./Scores";
import Sections from "./Sections";

import SliderHome from "./SliderHome";
function Home(props) {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
 return(
 <>
   <SliderHome sectionsInfo={props.departmentsInfo} />
   <Scores scoresData={props.scoresData}/>
   
   <About images={props.departmentsInfo} aboutData={props.aboutData} />
   <Sections sectionsInfo={props.departmentsInfo}/>
   <Contant/>
   </>
 )}   
 export default Home;