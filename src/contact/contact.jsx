import React, { useEffect, useRef, useState } from "react";
import '../contact/contact.css'
import emailjs from '@emailjs/browser';
import {gsap, Power4, Power3} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const Contact = () => {
    const [message, setMessage] = useState("");


    // gsap

    const downTransition = useRef(null)
    const upTransition = useRef(null)
    const elll = useRef();
    const q = gsap.utils.selector(elll);
  
 
    useEffect(() => {
      const el = downTransition.current;
  
      gsap.from(el, {y:"-20%" , opacity: 0, ease:Power4.easeOut, duration:3, scrollTrigger: {
        trigger: el
      }})
      
    
    },[])
  
  
    useEffect(() => {
      const ell = upTransition.current;
  
      gsap.from(ell, {y:"20%" , opacity: 0, ease:Power3.easeOut, duration:3, scrollTrigger: {
        trigger: ell
      }})
      
    
    },[])


    //email js

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5c9yseo', 'template_ks1jtrf', e.target, '90Y17Wf4h3vUk_rDB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
            setMessage("Message Sent!")
            setTimeout(()=>{
                setMessage("")
            }, 3000)
      };
    

  return (
    <div className='contact-container' id="contact">
        <div className='contact-title' ref={downTransition}>CONTACT ME</div>
       
        <form onSubmit={sendEmail} ref={upTransition}>
            <div className='textt'>I would ♥ to work with you!</div>
            <input type="text" placeholder='Name' className='details-input' name='name' required/>  
            <input type="email" placeholder='Email' className='details-input' name='user_email' required/>
            <textarea id="" cols="30" rows="10" className='message-input' name='message' required></textarea>
            <input type="submit" value="Submit" className='button'/>
            {message && <div className='messageSuccess'>{message}</div>}
        </form>
       
    </div>
  )
}

export default Contact