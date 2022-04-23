import React, { Component } from "react";
import Slider from "react-slick";
import '../services/services.css';
import {BsFillMegaphoneFill} from 'react-icons/bs'
import { DiWordpress } from "react-icons/di";
import { MdWebAsset } from "react-icons/md";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",  background:"grey", width:40, height:40, justifyContent:"center", alignItems:"center", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",  background:"grey", width:40, height:40, justifyContent:"center", alignItems:"center", }}
        onClick={onClick}
      />
  
    );
  }

const Services = () => { {
  
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1,
        duration:10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="services-container">
        <div className="service-wrapper">
        <div className="services-title">SERVICES</div>
        <div>F</div>
        {/* <Slider {...settings}>
            
          <div>
          <div className="t">
            <BsFillMegaphoneFill className="service-icon"/>
            <h2>Digital Marketing</h2>
          </div>
          </div>

          <div>
          <div className="t">
            <MdWebAsset className="service-icon"/>
            <h2>Web Development</h2>
          </div>
          </div>

          <div>
          <div className="t">
            <DiWordpress className="service-icon"/>
            <h2>Wordpress Development</h2>
          </div>
          </div>
         
        </Slider> */}
      </div>
      </div>
    );
  }
}

export default Services;