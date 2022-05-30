import React, { useState, useRef, useEffect } from "react";
import "../works/works.css";
import { BsGithub } from "react-icons/bs";
import vofshoes from "../vofshoes.png";
import RBV from "../RBV.png";
import FoodBuzz from "../FoodBuzz.png";
import PocketWatch from "../PocketWatch.png";
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
  const upTransition4 = useRef(null);


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

  useEffect(() => {
    const ell = upTransition4.current;

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
    <div className="works-container" id="projects">
      <div className="works-title-wrapper" ref={downTransition}>
        PROJECTS
      </div>
      <div className="f">F</div>

      <div className="projects-wrapper">
        
      <div className="project-wrapper" ref={upTransition4}>
        <div className="hove">
          <div className="project-text">
            <div className="year">2021</div>
            <a href="https://foodbuzz.herokuapp.com/">FoodBuzz</a>
          </div>
          <a href="https://foodbuzz.herokuapp.com/" className="image-wrapper">
            <GoLinkExternal className="external-link-icon" />
            <img src={FoodBuzz} alt="" />
          </a>
        </div>
        {/* mobile start */}
        <div className="hove-mobile">
          <div
            className="project-text"
            onClick={() => setImageShow4(!imageShow4)}
            onBlur={() => setImageShow4(false)}
            tabIndex="0"
          >
            <div className={imageShow4 ? "year2" : "year"}>2022</div>
            <div className={imageShow4 ? "tytle2" : "tytle"}>FoodBuzz</div>
          </div>
          <a
            onMouseDown={(e) => e.preventDefault()}
            tabIndex="0"
            href="https://foodbuzz.herokuapp.com/"
            className={imageShow4 ? "mobImageShow" : "mobImageNoShow"}
          >
            <GoLinkExternal
              className={imageShow4 ? "mobExternal-link-icon" : "noExtLink"}
            />
            <img src={FoodBuzz} alt="" />
          </a>
        </div>
        {/* * mobile end */}
        <div className="project-about-dropDown">
          <div
            className="project-about-title"
            onClick={() => setAbout4(!about4)}
            onBlur={() => setAbout4(false)}
            tabIndex="0"
          >
            About <FiChevronDown />
          </div>
          <div className={about4 ? "project-about" : "project-about2"}>
            <div className="main-about">
              FoodBuzz is a MERN stack food blog that enable readers read
              about delicious recipes. Authors can also create profile and
              write/publish/edit/delete posts on the blog.
              <br />
              <br />
              <span>
              FEATURES:
                <br /> • Login/Signup/Logout
                <br /> • Search functionality
                <br /> • CRUD posts and categories
                <br /> • CRUD user profile
                <br /> • Post page with related products
                <br /> • Newsletter subscription
                <br /> • Load more posts functionality
              </span>
              <br /> <br />
              <span>
                TECH:
                <br /> React Js - Node Js - MongoDB - Express Js  
              </span>
            </div>
            <div className="project-links">
              <BsGithub style={{ fontSize: "22px" }} />
              <a
                href="https://github.com/frank4177/FoodBuzz-Blog"
                style={{ marginLeft: "5px", color: "#6f373c" }}
                onMouseDown={(e) => e.preventDefault()}
              >
                {" "}
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="project-wrapper" ref={upTransition1}>
        <div className="hove">
          <div className="project-text">
            <div className="year">2021</div>
            <a href="https://FoodBuzz-ecommerce.vercel.app/">Pocket Watch</a>
          </div>
          <a
            href="https://FoodBuzz-ecommerce.vercel.app/"
            className="image-wrapper"
          >
            <GoLinkExternal className="external-link-icon" />
            <img src={PocketWatch} alt="" />
          </a>
        </div>
        {/* mobile start */}
        <div className="hove-mobile">
          <div
            className="project-text"
            onClick={() => setImageShow3(!imageShow3)}
            onBlur={() => setImageShow3(false)}
            tabIndex="0"
          >
            <div className={imageShow3 ? "year2" : "year"}>2022</div>
            <div className={imageShow3 ? "tytle2" : "tytle"}>Pocket Watch</div>
          </div>
          <a
            onMouseDown={(e) => e.preventDefault()}
            tabIndex="0"
            href="https://pocketwatch-ecommerce.vercel.app/"
            className={imageShow3 ? "mobImageShow" : "mobImageNoShow"}
          >
            <GoLinkExternal
              className={imageShow3 ? "mobExternal-link-icon" : "noExtLink"}
            />
            <img src={PocketWatch} alt="" />
          </a>
        </div>
        {/* * mobile end */}
        <div className="project-about-dropDown">
          <div
            className="project-about-title"
            onClick={() => setAbout3(!about3)}
            onBlur={() => setAbout3(false)}
            tabIndex="0"
          >
            About <FiChevronDown />
          </div>
          <div className={about3 ? "project-about" : "project-about2"}>
            <div className="main-about">
              POCKETWATCH is an Ecommerce store that enable users find their
              favorite pocket watches. Admin can also create/update/delete products via Sanity CMS.
              <br />
              <br />
              <span>
              FEATURES:
                <br /> • Login/Signup/Logout
                <br /> • User/Admin dashboard(sanity-io)
                <br /> • CRUD Products
                <br /> • Product page with related products
                <br /> • Shopping cart
              </span>
              <br /> <br />
              <span>
                TECH:
                <br /> React Js - Next Js - Sanity CMS
              </span>
            </div>
            <div className="project-links">
              <BsGithub style={{ fontSize: "22px" }} />
              <a
                href="https://github.com/frank4177/POCKETWATCH-Ecommerce"
                style={{ marginLeft: "5px", color: "#6f373c" }}
                onMouseDown={(e) => e.preventDefault()}
              >
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
            <a href="https://vofshoes.herokuapp.com">VOF Shoes</a>
          </div>
          <a href="https://vofshoes.herokuapp.com" className="image-wrapper">
            <GoLinkExternal className="external-link-icon" />
            <img src={vofshoes} alt="" />
          </a>
        </div>
        {/* mobile start */}
        <div className="hove-mobile">
          <div
            className="project-text"
            onClick={() => setImageShow1(!imageShow1)}
            onBlur={() => setImageShow1(false)}
            tabIndex="0"
          >
            <div className={imageShow1 ? "year2" : "year"}>2022</div>
            <div className={imageShow1 ? "tytle2" : "tytle"}>VOF Shoes</div>
          </div>
          <a
            onMouseDown={(e) => e.preventDefault()}
            tabIndex="0"
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
            onClick={() => setAbout1(!about1)}
            onBlur={() => setAbout1(false)}
            tabIndex="0"
          >
            About <FiChevronDown />
          </div>
          <div className={about1 ? "project-about" : "project-about2"}>
            <div className="main-about">
              VOF is a MERN stack shoe store that enable users find
              their favourite shoes, add to cart and checkout via Paystack
              payment gateway. It is the final project I and two other developers were tasked
              with during our fullstack training at Projaro Institute
              of Technology. 
              <p>
                {" "}
                We shared the task amongst ourselves: me developing the
                client frontend, the second person developing the admin dashboard,
                and the third developing the backend. We agreed to assist each
                other where necessary, and I assisted in both the admin dashboard
                and backend.
              </p>
              <br />{" "}
              <span>
                WHAT I DID:
                <br /> Client Frontend:
                <br /> • I designed the UI
                <br /> • I integrated the API endpoint and made sure it
                corresponds to the design.
                <br />
                <br /> Admin Dashboard:
                <br /> • I integrated API endpoint.
                <br />
                <br /> Backend:
                <br /> • I debugged some codes
                <br /> • I wrote some database schema models.
              </span>
              <br /> <br />
              <span>
                TECH:
                <br /> ReactJs - NodeJs - MongoDB - ExpressJs - Redux
              </span>
            </div>
            <div className="project-links">
              <BsGithub style={{ fontSize: "22px" }} />
              <a href="https://github.com/frank4177/VOF-mern-ecommerce" style={{ marginLeft: "5px", color: "#6f373c" }} onMouseDown={(e) => e.preventDefault()}>
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
            <a href="https://random-bible-verse-generator.netlify.app/">Bible Verse </a>
          </div>
          <a href="https://random-bible-verse-generator.netlify.app/" className="image-wrapper">
            <GoLinkExternal className="external-link-icon" />
            <img src={RBV} alt="" />
          </a>
        </div>
        {/* mobile start */}
        <div className="hove-mobile">
          <div
            className="project-text"
            onClick={() => setImageShow2(!imageShow2)}
            onBlur={() => setImageShow2(false)}
            tabIndex="0"
          >
            <div className={imageShow2 ? "year2" : "year"}>2022</div>
            <div className={imageShow2 ? "tytle2" : "tytle"}>Bible Verse </div>
          </div>
          <a
            onMouseDown={(e) => e.preventDefault()}
            tabIndex="0"
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
            onClick={() => setAbout2(!about2)}
            onBlur={() => setAbout2(false)}
            tabIndex="0"
          >
            About <FiChevronDown />
          </div>
          <div className={about2 ? "project-about" : "project-about2"}>
            <div className="main-about" smooth="true">
              BibleVerse is a random Bible verse generator. The web app enables users find
              random Bible verses, which can be shared on twitter and WhatsApp.
              The Bible verses are fetched from TheySaidSo API.
              <br />
              <br />
              <span>
              FEATURES:
                <br /> • Generate random Bible verses on click
                <br /> • Share on Whatsapp
                <br /> • Share on Twitter
              </span>
              <br /> 
              <br /> 
              TECH:
              <br /> HTML5 - CSS3 - JavaScript
              <br />
            </div>
            <div className="project-links">
              <BsGithub style={{ fontSize: "22px" }} />
              <a href="https://github.com/frank4177/Random-Bible-Verse-Generator" style={{ marginLeft: "5px", color: "#6f373c" }} onMouseDown={(e) => e.preventDefault()}>
                {" "}
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Works;
