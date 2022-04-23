import React, { useEffect, useRef } from "react";
import '../showcase/showcase.css'
import {AiOutlineArrowRight} from "react-icons/ai"
import {gsap, Power4} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {

  const downTransition = useRef(null)
 

  useEffect(() => {
    const el = downTransition.current;

    gsap.from(el, {y:"-5%" , opacity: 0, ease:Power4.easeOut, duration:5, scrollTrigger: {
      trigger: el
    }})
    
  
  },[])
  return (
    <div className='showCase-container' ref={downTransition}>
        <div className='about-wrapper'>
            <div className='about-text'>Hi,<br/>Thanks for checking out<br/> my portfolio &#128522;</div>
            {/* <button>Download CV</button> */}
        </div>
        <div className='image-wrapper'>
            {/* <img src="https://img.freepik.com/free-photo/cheerful-young-sports-man-posing-showing-thumbs-up-gesture_171337-8194.jpg?t=st=1648501492~exp=1648502092~hmac=17efa2733df98d47836f20278a9871dd9b8a207c021846d3be3a2009e9158022&w=740" alt="" /> */}
            
        </div>
    </div>
  )
}

export default Showcase;