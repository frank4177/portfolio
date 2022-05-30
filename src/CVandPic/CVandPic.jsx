import React, { useEffect, useRef } from "react";
import '../CVandPic/CVandPic.css'
import PortfolioPicMain from '../PortfolioPicMain.jpg'
import {gsap, Power4} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { IoMdDownload } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger) 


const CVandPic = () => {

  const downTransition = useRef(null)
  const upTransition = useRef(null)


  useEffect(() => {
    const ell = upTransition.current;

    gsap.from(ell, {x:"100%" , opacity: 0, ease:Power4.easeOut, duration:3, scrollTrigger: {
      trigger: ell
    }})
    
  
  },[])

  useEffect(() => {
    const el = downTransition.current;

    gsap.from(el, {x:"-100%" , opacity: 0, ease:Power4.easeOut, duration:3, scrollTrigger: {
      trigger: el
    }})
    
  
  },[])


  return (
    <div className='CVandpic-container' id="resume">
        
        <div className='pic'ref={upTransition}>
            <img src={PortfolioPicMain} alt="" />
        </div>
        <button ref={downTransition}><a download href="AGU_FRANKLIN_CV.docx">Download CV <IoMdDownload/></a></button>
    </div>
  )
}

export default CVandPic