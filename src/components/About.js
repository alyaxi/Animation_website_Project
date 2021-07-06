import React,{useEffect, useRef} from "react";
import "./About.css";
import { motion } from "framer-motion";
import AboutDiv from "./AboutDiv";
import lottie from "lottie-web";
import aboutUsSvg from '../img/19003-board-team.json';

const About = () => {
  const pageTransisiton = {
    in: { opacity: 1 },
    out: { opacity: 0 },
  };
  let animationAbout = useRef()
  useEffect(()=>{ 
   const anime = lottie.loadAnimation({
    container: animationAbout.current,
    animationData:aboutUsSvg,
    
  })
  anime.setDirection(2)
  }, [animationAbout])


  return (
    <motion.div
      id="about"
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransisiton}
    >
      <AboutDiv />
      <motion.div className="container-fluid" id="main-div" initial={{x:-1500}}animate={{x:0,transition:{delay:1,type:"spring",stiffness:100,ease:"easeInOut"}}}>
        <div className="row">
        <div className="col-6">
          <h1>Short Story About CrossFire</h1>
          <h5>
            CrossFire Solutions was started by group of
            entrepreneurs with a vision to publicly aware dwellers of Karachi
            about what technology can really bring to their businesses. Our
            services are focused towards producing outcomes, not outputs. Our
            team is passionate and always puts strategy before execution. We
            work with companies of all sizes. It's our business, our passion,
            our calling, and our expertise. This is what we do. Let's get
            started. We work to be the number 1 with more than 50% of the
            revenues and profits of every global market we enter Since 2015,
            CrossFire has delivered comprehensive, dependable, and cost-effective
            IT outsourcing solutions to our clients driven by our core values of
            accomplishment, ownership, demonstrated expertise, attention to
            detail, teamwork, sound business judgment, and most of all
            credibility with our customer.
          </h5>
          </div>
          <motion.div className="col-6" initial={{x:2000}}animate={{x:0,transition:{delay:1,type:"spring",stiffness:100,ease:"easeInOut"}}} >
        <div className="aboutUsSvg" ref={animationAbout}>
        </div>      
      </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
