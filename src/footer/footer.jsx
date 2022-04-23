import React from 'react'
import '../footer/footer.css'
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='social-container'>
      <div className='social-wrapper'>
      <a href="https://github.com/frank4177"><AiFillGithub className='social-icon'/></a>
      <a href="https://www.linkedin.com/in/franklin-agu-4963781b0/"><AiFillLinkedin className='social-icon'/></a>
      <a href="https://wa.me/2348106144158/?text=Hey man, Let's code!"><AiOutlineWhatsApp className='social-icon'/></a>
      </div>
      <div>© 2022. <span>F</span>ranklin</div>
    </div>
    
  )
}

export default Footer