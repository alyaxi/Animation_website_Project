import React from 'react';
import "./About.css";
import Typed from 'react-typed';
import { motion } from "framer-motion";
import img from "../img/Logo CrossFire.png";

export default function AboutDiv() {
    const logoTrans = {
        animate:{
            
            x:0,
            opacity:1,
            rotate:0,
            transition: {delay:1.5,type:"spring", stiffness:100,duration:5,ease:"easeInOut" }
        
        
        },
        initial:{
            x:250,
            opacity:0,
            rotate:180},
        
    }
    return (
                    <div className="container">
        <div className="row">
                    <h1 id="aboutheading">About us</h1>
                    <div className="about-container">
                        <div className="col-6">
                        <h2> <strong>Message from CEO</strong></h2>
                        <Typed strings={["<h4>Our vision is to connect ideas with the power of technology, boosting our clients' competitive pace for their long-term profitability and sustainability.</h4><h5><strong>Syed Ali Uz Zaman</strong><br/>CEO, CrossFire Ltd.</h5>"]}
                        typeSpeed={40}
                        backSpeed={30}
                        backDelay={100}
                        loop/>
                        
                            </div>
                        <motion.div className="col-4" animate="animate" initial="initial" variants={logoTrans}>
                                <img src={img} height="150px" width="240px" alt="logo"/>
                            </motion.div>
                        </div>

                    </div>
                    </div>

        
    )
}
