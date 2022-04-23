import React, { useState, useRef, useEffect } from "react";
import "../works/works.css";
import { BsChevronDown, BsGithub } from "react-icons/bs";
import vofshoes from "../vofshoes.png";
import RBV from "../RBV.png";
import { FiChevronDown } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





const Works = () => {
  const downTransition = useRef(null);
  const upTransition1 = useRef(null);
  const upTransition2 = useRef(null);
  const upTransition3 = useRef(null);
  

  useEffect(() => {
    const el = downTransition.current;

    gsap.from(el, {
      y: "-50%",
      opacity: 0,
      ease: Power4.easeOut,
      duration: 3,
      scrollTrigger: {
        trigger: el,
      },
    });
  }, []);

  useEffect(() => {
    const ell = upTransition1.current;

    gsap.from(ell, {
      y: "50%",
      opacity: 0,
      ease: Power4.easeOut,
      duration: 3,
      scrollTrigger: {
        trigger: ell,
      },
    });
  }, []);

  useEffect(() => {
    const ell = upTransition2.current;

    gsap.from(ell, {
      y: "50%",
      opacity: 0,
      ease: Power4.easeOut,
      duration: 3,
      scrollTrigger: {
        trigger: ell,
      },
    });
  }, []);

  useEffect(() => {
    const ell = upTransition3.current;

    gsap.from(ell, {
      y: "50%",
      opacity: 0,
      ease: Power4.easeOut,
      duration: 3,
      scrollTrigger: {
        trigger: ell,
      },
    });
  }, []);


  // for imageShow
  const [imageShow1, setImageShow1] = useState(false);
  const [imageShow2, setImageShow2] = useState(false);
  const [imageShow3, setImageShow3] = useState(false);
  const [imageShow4, setImageShow4] = useState(false);

  // for about dropdown
  const [about1, setAbout1] = useState(false);
  const [about2, setAbout2] = useState(false);
  const [about3, setAbout3] = useState(false);
  const [about4, setAbout4] = useState(false);



  return (
    <div className="works-container" id="projects" >
      <div className="works-title-wrapper" ref={downTransition}>
        PROJECTS
      </div>
      <div className="f">F</div>

      

<div className="project-wrapper" ref={upTransition1}>
        <div className="hove">
          <div className="project-text">
            <div className="year">2021</div>
            <a href="https://vofshoes.herokuapp.com">VOF Shoes</a>
          </div>
          <a href="https://vofshoes.herokuapp.com" className="image-wrapper">
            <GoLinkExternal className="external-link-icon" />
            <img src={RBV} alt="" />
          </a>
        </div>
        {/* mobile start */}
        <div className="hove-mobile">
          <div
            className="project-text"
            onClick={() => setImageShow1(!imageShow1)} onBlur={() => setImageShow1(false)} tabIndex="0"
          >
            <div className={imageShow1 ? "year2" : "year"}>2022</div>
            <div className={imageShow1 ? "tytle2" : "tytle"}>VOF Shoes</div>
          </div>
          <a
            href="https://vofshoes.herokuapp.com"
            className={imageShow1 ? "mobImageShow" : "mobImageNoShow"}
          >
            <GoLinkExternal
              className={imageShow1 ? "mobExternal-link-icon" : "noExtLink"}
            />
            <img src={vofshoes} alt="" />
          </a>
        </div>
        {/* * mobile end */}
        <div className="project-about-dropDown">
          <div
            className="project-about-title"
            onClick={() => setAbout1(!about1)} onBlur={() => setAbout1(false)} tabIndex="0"
          >
            About <FiChevronDown />
          </div>
          <div className={about1 ? "project-about" : "project-about2"}>
          <div className="main-about">
                VOF was the final project I and two other developers were tasked
                with during our 3 months fullstack training at Projaro Institute
                of Technology. It is an Ecomm shoe store that enables users find
                their favourite shoes, add to cart and checkout via Paystack
                payment gateway.
                <p> We shared the task amongst ourselves: me developing the
                user-frontend, the second person developing the admin-frontend,
                and the third developing the backend. We agreed to assist each other
                where necessary, and I assisted in both the admin-frontend and
                back end.</p>
                <br />{" "}
                <span>
                  WHAT I DID:
                  <br /> User-Frontend:
                  <br /> • I designed the UI
                  <br /> • I integrated the API endpoint and made sure it
                  corresponds to the design.
                  <br />
                  <br /> Admin-Frontend:
                  <br /> • I integrated API endpoint.
                  <br />
                  <br /> Backend:
                  <br /> • I debugged some codes
                  <br /> • I wrote some database schema models.
                </span>
                <br />{" "}
                <br />
                <span>
                  TECH:<br /> ReactJs - NodeJs - MongoDB - ExpressJs - Redux
                </span>
              </div>
            <div className="project-links">
              <BsGithub style={{ fontSize: "22px" }} />
              <a href="#" style={{ marginLeft: "5px", color: "#6f373c" }}>
                {" "}
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="project-wrapper" ref={upTransition2}>
        <div className="hove">
          <div className="project-text">
            <div className="year">2021</div>
            <a href="https://vofshoes.herokuapp.com">Bible Verse </a>
          </div>
          <a href="https://vofshoes.herokuapp.com" className="image-wrapper">
            <GoLinkExternal className="external-link-icon" />
            <img src={RBV} alt="" />
          </a>
        </div>
        {/* mobile start */}
        <div className="hove-mobile">
          <div
            className="project-text"
            onClick={() => setImageShow2(!imageShow2)} onBlur={() => setImageShow2(false)} tabIndex="0"
          >
            <div className={imageShow2 ? "year2" : "year"}>2022</div>
            <div className={imageShow2 ? "tytle2" : "tytle"}>Bible Verse </div>
          </div>
          <a
            href="https://vofshoes.herokuapp.com"
            className={imageShow2 ? "mobImageShow" : "mobImageNoShow"}
          >
            <GoLinkExternal
              className={imageShow2 ? "mobExternal-link-icon" : "noExtLink"}
            />
            <img src={vofshoes} alt="" />
          </a>
        </div>
        {/* * mobile end */}
        <div className="project-about-dropDown">
          <div
            className="project-about-title"
            onClick={() => setAbout2(!about2)} onBlur={() => setAbout2(false)} tabIndex="0"
          >
            About <FiChevronDown />
          </div>
          <div className={about2 ? "project-about" : "project-about2"}>
          <div className="main-about" smooth="true">
                BibleVerse is a personal project. The web app enables users find
                random Bible verses, which can be shared on twitter and
                WhatsApp. The Bible verses are fetched from TheySaidSo API.<br/><br/> WHAT I DID:<br/> • I designed UI.<br/> • I fetched data from TheySaidSo
                API<br/><br/> TECH:<br/> HTML5 - CSS3 - JavaScript<br/>
              </div>
            <div className="project-links">
              <BsGithub style={{ fontSize: "22px" }} />
              <a href="#" style={{ marginLeft: "5px", color: "#6f373c" }}>
                {" "}
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="project-wrapper" ref={upTransition3}>
        <div className="hove">
          <div className="project-text">
            <div className="year">2021</div>
            <a href="https://vofshoes.herokuapp.com">Weather App </a>
          </div>
          <a href="https://vofshoes.herokuapp.com" className="image-wrapper">
            <GoLinkExternal className="external-link-icon" />
            <img src={RBV} alt="" />
          </a>
        </div>
        {/* mobile start */}
        <div className="hove-mobile">
          <div
            className="project-text"
            onClick={() => setImageShow3(!imageShow3)} onBlur={() => setImageShow3(false)} tabIndex="0"
          >
            <div className={imageShow3 ? "year2" : "year"}>2022</div>
            <div className={imageShow3 ? "tytle2" : "tytle"}>Weather App </div>
          </div>
          <a
            href="https://vofshoes.herokuapp.com"
            className={imageShow3 ? "mobImageShow" : "mobImageNoShow"}
          >
            <GoLinkExternal
              className={imageShow3 ? "mobExternal-link-icon" : "noExtLink"}
            />
            <img src={vofshoes} alt="" />
          </a>
        </div>
        {/* * mobile end */}
        <div className="project-about-dropDown">
          <div
            className="project-about-title"
            onClick={() => setAbout3(!about3)} onBlur={() => setAbout3(false)} tabIndex="0"
          >
            About <FiChevronDown />
          </div>
          <div className={about3 ? "project-about" : "project-about2"}>
            <div className="main-about">
              Iff built this project at projaro. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem eum omnis consequatur
              deleniti cupiditate ipsam ullam incidunt hic quod fugiat,
              asperiores libero excepturi, veniam architecto beatae obcaecati,
              officia magnam nulla!
            </div>
            <div className="project-links">
              <BsGithub style={{ fontSize: "22px" }} />
              <a href="#" style={{ marginLeft: "5px", color: "#6f373c" }}>
                {" "}
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
