import React, {useState} from 'react';
import '../navbar/navbar.css';
import {MdClose} from 'react-icons/md';
import {GoThreeBars} from 'react-icons/go';
import { HashLink as Hlink } from 'react-router-hash-link';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    return ( 
        <div className='container' id='home'>
            
            <div className='navbar-wrapper'>
            <div className='logo'>F</div>
            <div className={isMobile ? 'mobile-menu-wrapper' : 'menu-wrapper'} onClick={()=> setIsMobile(false)}>
                <Hlink className='menu' smooth to='#home'>Home</Hlink>
                <Hlink className='menu' smooth to='#about'>About</Hlink>
                <Hlink className='menu' smooth to='#projects'>Projects</Hlink>
                <Hlink className='menu' smooth to='#resume'>Resume</Hlink>
                <Hlink className='menu' smooth to='#contact'>Contact</Hlink>
            </div>
            <div className='menu-toggle' onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? <MdClose/> : <GoThreeBars/>}
            </div>
            </div>
            
        </div>
     );
}
 
export default Navbar;