import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animate from "../img/33635-worker-have-an-idea.json";
import "./home.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import headerwave from "../img/header-wave.svg";
import Typist from 'react-typist';
import {Link} from 'react-scroll';
import { motion } from "framer-motion";
const Header = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateY(-20%)" },
      { transform: "translateY(-10%)" },
    ],
    timing: {
      direction: "alternate-reverse",
      easing: "ease-in-out",
      duration: 2000,
      playbackRate: 1,
      iterations: Infinity,
    },
  });
  
  
  let animationChar = useRef()
  useEffect(()=>{ 
   const anime = lottie.loadAnimation({
    container: animationChar.current,
    animationData:animate,
    
  })
  anime.setDirection(2)
  }, [])
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} >
            <div className="bg-gri" id="home">
            <div className="heading">
            <Typist cursor={{show:false}}>
            <Typist.Delay ms={500}/>
            <h1>Hi</h1>
            <h1>Grow your Business with <strong className="brand-name"> CrossFire Ltd. </strong> </h1>
            <h2 className="my-3">
                we are providing best solution of software applications and web applications services to our valuable clients.
            </h2>
            </Typist>
            
            </div>
            <div className="buttonServices" > <Link to="Services" className="btn-get-started" smooth={true} duration={1000} >View Services</Link> </div>

           <div ref={animationChar} className="animationChar">

           </div>
          </div>
            <div className="img-wave">
            <img src={headerwave} alt="" ref={ref} />
            </div>
            </motion.div>
           
          
  );
};

export default Header;