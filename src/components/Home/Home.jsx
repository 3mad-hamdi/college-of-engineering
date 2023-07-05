import React ,{useEffect}from "react";
import About from "./About";
import Contant from "./Contant";
import Scores from "./Scores";
import Sections from "./Sections";

import SliderHome from "./SliderHome";
function Home() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
 return(
 <>
   <SliderHome/>
   <Scores/>
   <About  />
   <Sections />
   <Contant/>
   </>
 )}   
 export default Home;