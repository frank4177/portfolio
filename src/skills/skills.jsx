import React, { useEffect, useRef } from "react";
import "../skills/skills.css";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiWordpress,
} from "react-icons/di";
import {SiRedux} from "react-icons/si"
import { IoLogoFirebase } from "react-icons/io5";
import {gsap, Power4} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


function Box({ children }) {
  return <div className="box">{children}</div>;
}


const Skills = () => {

  const downTransition = useRef(null)
  const upTransition = useRef(null)
  const elll = useRef();
  const q = gsap.utils.selector(elll);



  

  useEffect(() => {
    const el = downTransition.current;

    gsap.from(el, {y:"-50%" , opacity: 0, ease:Power4.easeOut, duration:3, scrollTrigger: {
      trigger: el
    }})
    
  
  },[])


  useEffect(() => {
    const ell = upTransition.current;

    gsap.from(ell, {y:"50%" , opacity: 0, ease:Power4.easeOut, duration:3, scrollTrigger: {
      trigger: ell
    }})
    
  
  },[])


  useEffect(() => {
    
    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    gsap.from(q(".box"), {
      y: 50,
      stagger: 0.1,
      ease:Power4.easeOut,
      duration: 1,
      opacity:0,
      scrollTrigger: {
        trigger: '.box'
      },
      yoyo: true
    });
  }, []);
  
  
  return (
    <div className="skill-container" id="about">
      <div className="title-wrapper" ref={downTransition}>ABOUT ME</div>
      <div className="aboutt" ref={upTransition}>
        My name is <span>F</span>ranklin Agu, I'm a Front End Developer based in Abuja,
        Nigeria. I have a passion for programming and turning ideas into simple,
        beautiful, functional websites. My tech skills includes:
      </div>
      <div className="skill-icons" ref={elll}>
        <Box><DiHtml5 /></Box>
        <Box><DiCss3 /></Box>
        <Box><DiSass /></Box>
        <Box><DiBootstrap/></Box>
        <Box><DiJavascript1 /></Box>
        <Box><DiNodejs /></Box>
        <Box><DiReact /></Box>
        <Box><DiMongodb /></Box>
        <Box><IoLogoFirebase /></Box>
        <Box><SiRedux/></Box>
        <Box><DiWordpress /></Box>
      </div>
    </div>
  );
};

export default Skills;
