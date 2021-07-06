import React, { useRef, useEffect } from 'react';
import "./Services.css";
import TimelineServ from "./ServTimeline";
import mernIcon from "../img/33577-webinside-illustration-animation.json";
import CardServ from './CardServ'
import lottie from "lottie-web";
import { motion } from "framer-motion";

export default function Services() { 

  let animationChar2 = useRef()
  useEffect(()=>{ 
   const anime = lottie.loadAnimation({
    container: animationChar2.current,
    animationData:mernIcon,
    
  })
  anime.setDirection(2)
  }, [animationChar2])

  return (
    <motion.div className="main-div" id="Services" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <h1>Services</h1>
    <div className="row timeline">
    {/* <div className="col-12 timeline"> */}
    <div className="col-sm-6 ">
      <h2>Development</h2>
      <TimelineServ/>
    </div>
      <div className="col-sm-6">
        <div className="mernstack-icon" ref={animationChar2} >
        </div>      
      </div>
      </div>
      <div>
        <CardServ/>
      </div>
    </motion.div>
  );
}
