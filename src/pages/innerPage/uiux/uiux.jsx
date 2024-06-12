"use client";
import React, { useRef, useState, useEffect } from "react";
import StickyCursor from "../../../components/stickyCursor/index";
import styles from "./uiux.module.css";
import Header from "../../../components/header/index";
import Concept1 from './Images/concept-1.webp'
import Concept2 from './Images/concept-2.webp'
import Image from "next/image";
import OFFER from '../components/whatWeOffer/index'
import Time from "../components/time/Time";
import Estimate from "../components/Estimate/Estimate";
import Gallery from "../components/gallery/gallery";
import Footer from "../../../components/footer/index";
import SecondryFooter from "../../../components/secondaryFooter/index";
import Design from "./component/design/design";
import Faq from "../components/FAQ/Faq";
import Employee from "../components/Employe/Employee";

import "animate.css";
import Numbers from "../components/number/Numbers";
import Count from './component/count/index'
import Whyus from "./component/whyus/index"
import WeServe from "./component/weserve/index"
import Portfolio from "./component/portfolio/index";
// import 'bootstrap/dist/css/bootstrap.min.css';

const uiux = () => {
  const stickyElement = useRef(null);

  return (
    <>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <div className={`container  ${styles.container}`}>
        <div className={`grid grid-cols-12 gap-4 ${styles.roe}`}>
          <div className="col-span-6">
            <p>Design</p>
            <span className={styles.Heading}>
              <h1>UI/UX design services</h1>
            </span>
            <p>
              Our professional team, comprising over 10 designers, specializes
              in crafting user experiences and user interface designs.
            </p>
            <button className={styles.headerButton}>Schdule all call</button>
          </div>
        </div>
        {/* <div className={`grid grid-cols-12 gap-4" ${styles.BoxContainer}`}>
          <span className={styles.boxImage}>
            <Image src={FirstImage} />
          </span>
          <span className={styles.boxImage}>
            <Image src={SecontImage} />
          </span>
          <span className={styles.boxImage}>
            <Image src={ThreeImage} />
          </span>
          <span className={styles.boxImage}>
            <Image src={FourImage} />
          </span>
        </div> */}
        <div className={`grid grid-cols-12 gap-4" ${styles.abouttheservice}`}>
          <div className="col-span-8 p-4 animate__animated animate__fadeInUp">
            <h1
              className={`animate__animated animate__fadeInUp ${styles.AboutServiceContent}`}
            >
              As a versatile IT company, we extend our capabilities beyond
              technology solutions to also encompass logo design services. We
              offer a tailored approach to create distinctive and memorable
              logos that visually echo the key attributes of your brand.
            </h1>
          </div>
          <div className="col-span-4 p-4">
            <p
              className={`animate__animated animate__fadeInUp ${styles.AboutServiceContent2}`}
            >
              Our expert designers keep versatility at the heart of their
              craftsmanship, ensuring your logo demonstrates great flexibility
              across various applications. Utilizing typography that is
              compatible with multiple formats, we can help you make a powerful
              visual statement.
            </p>
          </div>
        </div>

        <div className={`grid grid-cols-12 gap-4 ${styles.Concept}`}>
          <div className={`col-span-6 ${styles.imagebox}`}>
             <Image src={Concept1} />
          </div>
          <div className={`col-span-6 ${styles.imagebox2}`}>
             <Image src={Concept2} />
          </div>
        </div>
        
        {/* <Estimate /> */}
        {/* <Gallery /> */}
        {/* <Portfolio /> */}
        {/* <Faq /> */}
      </div>
      <OFFER />
      <Design />
       <Count />
       <Whyus />
      <Numbers />
      <WeServe />
       <Portfolio />
      {/* <Time /> */}
        {/* <Employee/>
            */}
      <SecondryFooter />
      <Footer />
    </>
  );
};

export default uiux;
